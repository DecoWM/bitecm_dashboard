<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Carbon\Carbon;
use App\Http\Controllers\ApiController;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SucursalController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $sucursal_list = DB::table('tbl_branch')->select('tbl_branch.branch_id', 'tbl_branch.branch_name', 'tbl_branch.zip_code', 'tbl_branch.branch_address', 'tbl_branch.created_at', 'tbl_branch.updated_at', 'tbl_branch.active')->get();

    return response()->json([
      'result' => $sucursal_list,
      'success' => true
    ]);
  }

  public function publishBranch($branch_id) {
    $branch = DB::table('tbl_branch')
      ->where('branch_id', $branch_id)
      ->select('branch_id')
      ->first();

    if ($branch) {

      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_branch')
        ->where('branch_id', $branch->branch_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo publicar la sucursal.',
      'success' => false
    ]);
  }

  public function hideBranch($branch_id) {
    $branch = DB::table('tbl_branch')->where('branch_id', $branch_id)->select('branch_id')->first();

    if ($branch) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_branch')
        ->where('branch_id', $branch->branch_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo ocultar la sucursal.',
      'success' => false
    ]);
  }

  // Permite el registro de una nueva sucursal
  public function storeBranch(Request $request) {
    //Validator
    $validator = Validator::make($request->all(), [
      'branch_name' => 'required'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $branch_name = $request->input('branch_name');
    $zip_code = $request->input('zip_code');
    $branch_address = $request->input('branch_address');

    $branch = DB::table('tbl_branch')
      ->orWhere('branch_name', $branch_name)
      ->select('branch_id')->first();

    if (!$branch) {
      try {
        DB::beginTransaction();
        $branch_id = DB::table('tbl_branch')->insertGetId([
          'branch_name' => $branch_name,
          'zip_code' => $zip_code,
          'branch_address' => $branch_address,
          'created_at' => Carbon::now()->toDateTimeString(),
          'created_by' => 1,
          'active' => 1
        ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar la sucursal.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      } catch (\PDOException $e){
        return response()->json([
          'result' => 'No se pudo conectar a la base de datos.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      } catch (\Exception $e) {
        return response()->json([
          'result' => 'Se produjo un error al registrar la sucursal.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }
    } else {
      return response()->json([
        'result' => 'Una sucursal con este nombre o código de sucursal ya existe.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => 'Sucursal registrada correctamente.',
      'id' => $branch_id,
      'success' => true
    ]);
  }

  public function getBranch($branch_id) {

    $branch = DB::table('tbl_branch')
      ->where('branch_id', $branch_id)
      ->first();

    if (!$branch) {
      return response()->json([
        'result' => 'No se pudo encontrar la sucursal.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => $branch,
      'success' => true
    ]);
  }

  public function updateBranch($branch_id_update, Request $request) {

    $branch = DB::table('tbl_branch')
      ->where('branch_id', $branch_id_update)
      ->select('branch_id')
      ->first();

    if ($branch) {

      $validator = Validator::make($request->all(), [
        'branch_name' => 'required'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $branch_name = $request->input('branch_name');
      $zip_code = $request->input('zip_code');
      $branch_address = $request->input('branch_address');
      $updated_at = Carbon::now()->toDateTimeString();

      $data = [
        'branch_name' => $branch_name,
        'zip_code' => $zip_code,
        'branch_address' => $branch_address,
        'updated_at' => $updated_at
      ];

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_branch')->where('branch_id', $branch->branch_id)->update($data);
        //DB::table('tbl_product_variation')->where('variation_type_id', '1')->where('product_id', $product->product_id)->update(['product_variation_price' => $product_price]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo actualizar la sucursal.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Sucursal actualizada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar la sucursal.',
      'success' => false
    ]);
    
  }
  
}
