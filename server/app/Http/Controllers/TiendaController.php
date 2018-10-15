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

class TiendaController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  /*
  public function list() {
    $tienda_list = DB::table('tbl_store')
    ->join("tbl_branch", 'tbl_store.branch_id', '=', 'tbl_branch.branch_id')
    ->join("tbl_district", 'tbl_district.branch_id', '=', 'tbl_store.branch_id')
    ->join("tbl_province", 'tbl_province.province_id', '=', 'tbl_district.province_id')
    ->join("tbl_department", "tbl_department.departament_id", '=', 'tbl_province.departament_id')
    ->select('tbl_store.store_id', 'tbl_store.branch_id','tbl_store.store_name', 'tbl_branch.branch_name', 'tbl_department.departament_name', 'tbl_province.province_name', 'tbl_district.district_name', 'tbl_store.zip_code', 'tbl_store.store_address', 'tbl_store.created_at', 'tbl_store.updated_at', 'tbl_store.active')->get();

    return response()->json([
      'result' => $tienda_list,
      'success' => true
    ]);
  }
  */
  
  public function list() {
    $tienda_list = DB::table('tbl_store')
    ->join("tbl_branch", 'tbl_store.branch_id', '=', 'tbl_branch.branch_id')
    ->select('tbl_store.store_id', 'tbl_store.branch_id','tbl_store.store_name', 'tbl_branch.branch_name', 'tbl_store.zip_code', 'tbl_store.store_address', 'tbl_store.created_at', 'tbl_store.updated_at', 'tbl_store.active')->get();

    return response()->json([
      'result' => $tienda_list,
      'success' => true
    ]);
  }

  public function publishStore($store_id) {
    $store = DB::table('tbl_store')->where('store_id', $store_id)->select('store_id')->first();

    if ($store) {

      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_store')
        ->where('store_id', $store->store_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo publicar la tienda.',
      'success' => false
    ]);
  }

  public function hideStore($store_id) {
    $store = DB::table('tbl_store')->where('store_id', $store_id)->select('store_id')->first();

    if ($store) {

      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_store')
        ->where('store_id', $store->store_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo ocultar la tienda.',
      'success' => false
    ]);
  }

  // Permite el registro de una nueva sucursal
  public function storeStore(Request $request) {
    //Validator
    $validator = Validator::make($request->all(), [
      'store_name' => 'required'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $branch_id = $request->input('branch_name');
    $store_name = $request->input('store_name');
    $zip_code = $request->input('zip_code');
    $store_address = $request->input('store_address');

    $store = DB::table('tbl_store')
      ->orWhere('store_name', $store_name)
      ->select('store_id')->first();

    if (!$store) {
      try {
        DB::beginTransaction();
        $store_id = DB::table('tbl_store')->insertGetId([
          'branch_id' => $branch_id,
          'store_name' => $store_name,
          'zip_code' => $zip_code,
          'store_address' => $store_address,
          'created_at' => Carbon::now()->toDateTimeString(),
          'created_by' => 1,
          'active' => 1
        ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar la tienda.',
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
          'result' => 'Se produjo un error al registrar la tienda.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }
    } else {
      return response()->json([
        'result' => 'Una tienda con este nombre o código de tienda ya existe.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => 'Tienda registrada correctamente.',
      'id' => $store_id,
      'success' => true
    ]);
  }

  public function getStore($store_id) {

    $store = DB::table('tbl_store')->where('store_id', $store_id)->first();

    if (!$store) {
      return response()->json([
        'result' => 'No se pudo encontrar la tienda.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => $store,
      'success' => true
    ]);
  }

  public function updateStore($store_id_update, Request $request) {

    $store = DB::table('tbl_store')->where('store_id', $store_id_update)->select('store_id')->first();

    if ($store) {

      $validator = Validator::make($request->all(), [
        'store_name' => 'required'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $branch_id = $request->input('branch_name');
      $store_name = $request->input('store_name');
      $zip_code = $request->input('zip_code');
      $store_address = $request->input('store_address');
      $updated_at = Carbon::now()->toDateTimeString();

      $data = [
        'branch_id' => $branch_id,
        'store_name' => $store_name,
        'zip_code' => $zip_code,
        'store_address' => $store_address,
        'updated_at' => $updated_at
      ];

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_store')->where('store_id', $store->store_id)->update($data);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo actualizar la tienda.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Tienda actualizada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar la tienda.',
      'success' => false
    ]);
    
  }

  public function listBranches() {
    $branch_list = DB::table('tbl_branch')
    ->select('tbl_branch.branch_id', 'tbl_branch.branch_name')
    ->where('tbl_branch.active', 1)
    ->get();

    return response()->json([
      'result' => $branch_list,
      'success' => true
    ]);
  }
 
}