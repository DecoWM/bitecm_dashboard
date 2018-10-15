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

class ContratoController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $contract_list = DB::table('tbl_contract')->select('tbl_contract.contract_id', 'tbl_contract.contract_name', 'tbl_contract.contract_months', 'tbl_contract.created_at', 'tbl_contract.updated_at', 'tbl_contract.active')->get();

    return response()->json([
      'result' => $contract_list,
      'success' => true
    ]);
  }

  public function publishContract($contract_id) {
    $contract = DB::table('tbl_contract')
      ->where('contract_id', $contract_id)
      ->select('contract_id')
      ->first();

    if ($contract) {

      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_contract')
        ->where('contract_id', $contract->contract_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo publicar el contrato.',
      'success' => false
    ]);
  }

  public function hideContract($contract_id) {
    $contract = DB::table('tbl_contract')->where('contract_id', $contract_id)->select('contract_id')->first();

    if ($contract) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_contract')
        ->where('contract_id', $contract->contract_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo ocultar el contrato.',
      'success' => false
    ]);
  }

  // Permite el registro de un nuevo contrato
  public function storeContract(Request $request) {
    //Validator
    $validator = Validator::make($request->all(), [
      'contract_name' => 'required',
      'contract_months' => 'required|integer',
      'weight' => 'required|integer'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $contract_name = $request->input('contract_name');
    $contract_months = $request->input('contract_months');
    $weight = $request->input('weight');
    if($contract_months == 0){
      $contract_slug = 'sin-contrato';
    }
    else{
      $contract_slug = str_slug($contract_name);
    }

    $contract = DB::table('tbl_contract')
      ->where('contract_slug', $contract_slug)
      ->orWhere('contract_name', $contract_name)
      ->select('contract_id')->first();

    if (!$contract) {
      try {
        DB::beginTransaction();
        $contract_id = DB::table('tbl_contract')->insertGetId([
          'contract_name' => $contract_name,
          'contract_months' => $contract_months,
          'contract_slug' => $contract_slug,
          'weight' => $weight,
          'created_at' => Carbon::now()->toDateTimeString(),
          'created_by' => 1,
          'active' => 1
        ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar el contrato.',
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
          'result' => 'Se produjo un error al registrar el contrato.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }
    } else {
      return response()->json([
        'result' => 'Un contrato con este nombre o código de contrato ya existe.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => 'Contrato registrado correctamente.',
      'id' => $contract_id,
      'success' => true
    ]);
  }

  public function getContract($contract_id) {

    $contract = DB::table('tbl_contract')
      ->where('contract_id', $contract_id)
      ->first();

    if (!$contract) {
      return response()->json([
        'result' => 'No se pudo encontrar el contrato.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => $contract,
      'success' => true
    ]);
  }

  public function updateContract($contract_id_update, Request $request) {

    $contract = DB::table('tbl_contract')
      ->where('contract_id', $contract_id_update)
      ->select('contract_id')
      ->first();

    if ($contract) {

      $validator = Validator::make($request->all(), [
        'contract_name' => 'required',
        'contract_months' => 'required|integer',
        'weight' => 'required|integer'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida2.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $contract_name = $request->input('contract_name');
      $contract_months = $request->input('contract_months');
      $weight = $request->input('weight');
      $updated_at = Carbon::now()->toDateTimeString();

      if($contract_months == 0){
        $contract_slug = 'sin-contrato';
      }
      else{
        $contract_slug = str_slug($contract_name);
      }

      $data = [
        'contract_name' => $contract_name,
        'contract_months' => $contract_months,
        'contract_slug' => $contract_slug,
        'weight' => $weight,
        'updated_at' => $updated_at
      ];

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_contract')->where('contract_id', $contract->contract_id)->update($data);
        //DB::table('tbl_product_variation')->where('variation_type_id', '1')->where('product_id', $product->product_id)->update(['product_variation_price' => $product_price]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo actualizar el contrato.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Contrato actualizado correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar el contrato.',
      'success' => false
    ]);
    
  }

  public function listVariationPlan() {
    $variation_list = DB::table('tbl_variation_type')
      ->where('tbl_variation_type.active', 1)
      ->select('tbl_variation_type.variation_type_id', 'tbl_variation_type.variation_type_name')
      ->get();

    return response()->json([
      'result' => $variation_list,
      'success' => true
    ]);
  }

}
