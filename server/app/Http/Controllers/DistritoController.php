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

class DistritoController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $district_list = DB::table('tbl_district')
    ->join('tbl_province','tbl_district.province_id', '=', 'tbl_province.province_id')
    ->join('tbl_department', 'tbl_province.departament_id', '=', 'tbl_department.departament_id')
    ->join('tbl_branch', 'tbl_branch.branch_id', '=', 'tbl_district.branch_id')
    ->whereNotNull('tbl_district.branch_id')
    ->where('tbl_department.active', 1)
    ->where('tbl_province.active', 1)
    ->where('tbl_district.active', 1)
    ->orderBy('tbl_department.departament_id','desc')
    ->orderBy('tbl_district.district_name','asc')
    ->select('tbl_department.departament_id', 'tbl_department.departament_name', 'tbl_district.province_id', 'tbl_province.province_name', 'tbl_district.district_id', 'tbl_district.district_name', 'tbl_district.branch_id', 'tbl_branch.branch_name', 'tbl_district.created_at','tbl_district.updated_at','tbl_district.active')
    ->get();

    return response()->json([
      'result' => $district_list,
      'success' => true
    ]);
  }

  public function listDepartments() {
    $department_list = DB::table('tbl_department')
    ->select('tbl_department.departament_id', 'tbl_department.departament_name')
    ->where('tbl_department.active', 1)
    ->get();

    return response()->json([
      'result' => $department_list,
      'success' => true
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

  public function listProvinces($departament_id) {
    $provinces_list = DB::table('tbl_province')
    ->select('tbl_province.province_id', 'tbl_province.province_name')
    ->where('tbl_province.departament_id', $departament_id)
    ->where('tbl_province.active', 1)
    ->get();

    return response()->json([
      'result' => $provinces_list,
      'success' => true
    ]);
  }

  public function listDistricts($province_id) {
    $districts_list = DB::table('tbl_district')
    ->select('tbl_district.district_id', 'tbl_district.district_name')
    ->where('tbl_district.province_id', $province_id)
    ->where('tbl_district.active', 1)
    ->get();

    return response()->json([
      'result' => $districts_list,
      'success' => true
    ]);
  }

  public function publishDistrict($district_id, $branch_id) {
    $district = DB::table('tbl_district')
      ->where('district_id', $district_id)
      ->select('district_id')
      ->first();

    if ($district) {

      $data = [
        'branch_id' => $branch_id,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_district')
        ->where('district_id', $district->district_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo asignar la sucursal.',
      'success' => false
    ]);
  }

  public function hideDistrict($district_id) {
    $district = DB::table('tbl_district')->where('district_id', $district_id)->select('district_id')->first();

    if ($district) {
      $data = [
        'branch_id' => null,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_district')
        ->where('district_id', $district->district_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo desasignar la sucursal.',
      'success' => false
    ]);
  }

  public function getDistrict($district_id) {

    $district = DB::table('tbl_district')
      ->where('district_id', $district_id)
      ->first();

    if (!$district) {
      return response()->json([
        'result' => 'No se pudo encontrar el distrito.',
        'success' => false
      ]);
    }

    return response()->json([
      'result' => $district,
      'success' => true
    ]);
  }

  public function updateDistrict(Request $request) {

    $district_id = $request->input('district_name');
    $branch_id = $request->input('branch_name');

    $branch = DB::table('tbl_branch')
      ->where('branch_id', $branch_id)
      ->select('branch_id')
      ->first();

    if ($branch) {

      $validator = Validator::make($request->all(), [
        'district_name' => 'required',
        'branch_name' => 'required'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $updated_at = Carbon::now()->toDateTimeString();

      $data = [
        'branch_id' => $branch_id,
        'updated_at' => $updated_at
      ];

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_district')->where('district_id', $district_id)->update($data);
        //DB::table('tbl_product_variation')->where('variation_type_id', '1')->where('product_id', $product->product_id)->update(['product_variation_price' => $product_price]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo asignar la sucursal al distrito.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Sucursal asignada al distrito correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar la sucursal o esta desactivada.',
      'success' => false
    ]);
    
  }

}
