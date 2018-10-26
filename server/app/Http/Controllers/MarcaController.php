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

class MarcaController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $marca_list = DB::table('tbl_brand')->select('tbl_brand.brand_id', 'tbl_brand.brand_name', 'tbl_brand.created_at', 'tbl_brand.updated_at', 'tbl_brand.active')->get();

    return response()->json([
      'result' => $marca_list,
      'success' => true
    ]);
  }

  public function publishBrand($brand_id) {
    $brand = DB::table('tbl_brand')
      ->where('brand_id', $brand_id)
      ->select('brand_id')
      ->first();

    if ($brand) {

      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_brand')
        ->where('brand_id', $brand->brand_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo publicar la marca.',
      'success' => false
    ]);
  }

  public function hideBrand($brand_id) {
    $brand = DB::table('tbl_brand')->where('brand_id', $brand_id)->select('brand_id')->first();

    if ($brand) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_brand')
        ->where('brand_id', $brand->brand_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo ocultar la marca.',
      'success' => false
    ]);
  }

  // Permite el registro de una nueva sucursal
  public function storeBrand(Request $request) {
    //Validator
    $validator = Validator::make($request->all(), [
      'brand_name' => 'required'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $brand_name = $request->input('brand_name');
    
    $brand = DB::table('tbl_brand')
      ->where('brand_name', $brand_name)
      ->select('brand_id')->first();

    if (!$brand) {
      try {
        DB::beginTransaction();
        $brand_id = DB::table('tbl_brand')->insertGetId([
          'brand_name' => $brand_name,
          'created_at' => Carbon::now()->toDateTimeString(),
          'created_by' => 1,
          'active' => 1
        ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar la marca.',
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
          'result' => 'Se produjo un error al registrar la marca.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }
    } else {
      return response()->json([
        'result' => 'Una marca con este nombre o código de marca ya existe.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => 'Marca registrada correctamente.',
      'id' => $brand_id,
      'success' => true
    ]);
  }

  public function getBrand($brand_id) {

    $brand = DB::table('tbl_brand')
      ->where('brand_id', $brand_id)
      ->first();

    if (!$brand) {
      return response()->json([
        'result' => 'No se pudo encontrar la marca.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => $brand,
      'success' => true
    ]);
  }

  public function updateBrand($brand_id_update, Request $request) {

    $brand = DB::table('tbl_brand')
      ->where('brand_id', $brand_id_update)
      ->select('brand_id')
      ->first();

    if ($brand) {

      $validator = Validator::make($request->all(), [
        'brand_name' => 'required'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $brand_name = $request->input('brand_name');
      $updated_at = Carbon::now()->toDateTimeString();

      $data = [
        'brand_name' => $brand_name,
        'updated_at' => $updated_at
      ];

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_brand')->where('brand_id', $brand->brand_id)->update($data);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo actualizar la marca.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Marca actualizada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar la marca.',
      'success' => false
    ]);
    
  }
  
}
