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

  /*
  public function showPlan($plan_id) {
    $cat_chip_id = 4;

    $product = DB::table('tbl_product')
      ->where('category_id', $cat_chip_id)
      ->first();

    if (!$product) {
      return response()->json([
        'result' => 'No se pudo encontrar el product chip.',
        'success' => false
      ]);
    }

    if (!empty($product->product_data_sheet)) {
      $product->product_data_sheet = asset(Storage::url($product->product_data_sheet));
    }

    $plan = DB::table('tbl_plan')
      ->where('plan_id', $plan_id)
      ->first();

    if (!$plan) {
      return response()->json([
        'result' => 'No se pudo encontrar el plan.',
        'success' => false
      ]);
    }

    if (!empty($product->product_image_url)) {
      $product->product_image_url = asset(Storage::url(($product->product_image_url)));
    }

    $plan->product = $product;

    return response()->json([
      'result' => $plan,
      'success' => true
    ]);
  }
  */

  public function getInformacionComercialPorPlan($plan_id) {
    $info_comercial = DB::table('tbl_plan_infocomercial')
      ->where('plan_id', $plan_id)
      //->where('active', 1)
      ->get();

    if ($info_comercial) {
      for ($i = 0; $i < count($info_comercial); $i++) {
        if (!empty($info_comercial[$i]->plan_infocomercial_img_url)) {
          $info_comercial[$i]->plan_infocomercial_img_url = asset(Storage::url(($info_comercial[$i]->plan_infocomercial_img_url)));
        }
      }
      return response()->json([
        'result' => $info_comercial,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar la información comercial del plan',
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

  public function listAffiliationPlan() {
    $affiliation_list = DB::table('tbl_affiliation')
      ->where('active', 1)
      ->select('affiliation_id', 'affiliation_name')
      ->get();

    return response()->json([
      'result' => $affiliation_list,
      'success' => true
    ]);
  }

 public function publishPlanInfoComercial($plan_infocomercial_id) {
    $product = DB::table('tbl_plan_infocomercial')
      ->where('plan_infocomercial_id', $plan_infocomercial_id)
      ->select('plan_infocomercial_id', 'plan_id')
      ->first();

    if ($product) {
      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_plan_infocomercial')
        ->where('plan_infocomercial_id', $product->plan_infocomercial_id)
        ->update($data);

      DB::table('tbl_plan')
        ->where('plan_id', $product->plan_id)
        ->update([
          'updated_at' => Carbon::now()->toDateTimeString()
        ]);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo activar la información comercial del plan.',
      'success' => false
    ]);
  }

  public function hidePlanInfoComercial($plan_infocomercial_id) {
    $product = DB::table('tbl_plan_infocomercial')
      ->where('plan_infocomercial_id', $plan_infocomercial_id)
      ->select('plan_infocomercial_id', 'plan_id')
      ->first();

    if ($product) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_plan_infocomercial')
        ->where('plan_infocomercial_id', $product->plan_infocomercial_id)
        ->update($data);

      DB::table('tbl_plan')
        ->where('plan_id', $product->plan_id)
        ->update([
          'updated_at' => Carbon::now()->toDateTimeString()
        ]);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo desactivar la información comercial del plan.',
      'success' => false
    ]);
  }

 // permite actualizar los datos de una informacion adicional
  public function savePlanInfoComercial(Request $request, $plan_infocomercial_id) {

    $validator = Validator::make($request->all(), [
        'descripcion' => 'required|string',
        'informacion_adicional' => 'required|string',
        'flag_cantidad' => 'required|integer',
        'image_file' => 'nullable|mimes:jpeg,jpg,png,svg|image|max:1024'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'descripcion' => '',
        'success' => false
      ]);
    }

   // input de los objetos del formulario
    $plan_id = $request->input('plan_id');
    $descripcion = $request->input('descripcion');
    $informacion_adicional = $request->input('informacion_adicional');
    $flag_cantidad = $request->input('flag_cantidad');

    // validacion del plan
    $product = DB::table('tbl_plan_infocomercial')
      ->where('plan_infocomercial_id', $plan_infocomercial_id)
      ->select('plan_infocomercial_id')
      ->first();

    if ($product) {
      $data = [
        'plan_infocomercial_descripcion' => $descripcion,
        'plan_infocomercial_informacion_adicional' => $informacion_adicional,
        'plan_infocomercial_flag_cantidad' => $flag_cantidad,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      if ($request->hasFile('image_file') && $request->file('image_file')->isValid()) {
        $prefix = "plan_info";
        $extension = $request->file('image_file')->guessExtension();
        $image_name = $request->file('image_file')->getClientOriginalName();
        $data['plan_infocomercial_img_url'] = $request->file('image_file')->storeAs($prefix, $image_name, 'public');
        $image_url = asset(Storage::url($data['plan_infocomercial_img_url']));
      } 
      else {
        $image_url = null;
      }

      DB::table('tbl_plan_infocomercial')
        ->where('plan_infocomercial_id', $product->plan_infocomercial_id)
        ->update($data);

      DB::table('tbl_plan')
        ->where('plan_id', $plan_id)
        ->update([
          'updated_at' => Carbon::now()->toDateTimeString()
        ]);

      return response()->json([
        'result' => $data,
        'descripcion' => $descripcion,
        'informacion_adicional' => $informacion_adicional,
        'flag_cantidad' => $flag_cantidad,
        'img_infocomercial' => $image_url,
        'success' => true
      ]);
    }
   
    return response()->json([
      'result' => 'No se pudo actualizar la información comercial del plan.',
      'success' => false
    ]);
  } 

  // permite el registro de una nueva informacion adicional
  public function insertarPlanInfoComercial(Request $request, $plan_id) {

     $validator = Validator::make($request->all(), [
      'descripcion_insertar' => 'required|string',
      'informacion_adicional_insertar' => 'required|string',
      'flag_cantidad_insertar' => 'required|integer',
      'image_file_insertar' => 'required|mimes:jpeg,jpg,png,svg|image|max:1024'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'descripcion' => '',
        'success' => false
      ]);
    }

    // input de los objetos del formulario
    $plan_id = $request->input('plan_id_insertar');
    $descripcion = $request->input('descripcion_insertar');
    $informacion_adicional = $request->input('informacion_adicional_insertar');
    $flag_cantidad = $request->input('flag_cantidad_insertar');

    $product = DB::table('tbl_plan')
      ->where('plan_id', $plan_id)
      ->select('plan_id')
      ->first();

    if ($product) {
      if ($request->hasFile('image_file_insertar') && $request->file('image_file_insertar')->isValid()) {
        $prefix = "plan_info";
        $extension = $request->file('image_file_insertar')->guessExtension();
        $image_name = $request->file('image_file_insertar')->getClientOriginalName();
        $img_infocomercial = $request->file('image_file_insertar')->storeAs($prefix, $image_name, 'public');
        $image_url = asset(Storage::url($img_infocomercial));
      } 
      else {
        $image_url = null;
      }

      try {
        DB::beginTransaction();
        $id = DB::table('tbl_plan_infocomercial')->insertGetId([
          'plan_id' => $plan_id,
          'plan_infocomercial_descripcion' => $descripcion,
          'plan_infocomercial_informacion_adicional' => $informacion_adicional,
          'plan_infocomercial_flag_cantidad' => $flag_cantidad,
          'plan_infocomercial_img_url' => $img_infocomercial,
          'created_at' => Carbon::now()->toDateTimeString(),
          'active' => 1
        ]);
        DB::table('tbl_plan')
          ->where('plan_id', $plan_id)
          ->update([
            'updated_at' => Carbon::now()->toDateTimeString()
          ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar la información comercial.',
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
          'result' => 'Se produjo un error al registrar la información comercial.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Información comercial registrada correctamente.',
        'id' => $id,
        'descripcion' => $descripcion,
        'success' => true
      ]);
    }
  }

  public function getAffiliationsPlan($plan_id) {
    $results = DB::select( DB::raw("SELECT `tbl_affiliation`.`affiliation_id`, `tbl_affiliation`.`affiliation_name`, CASE COUNT(`tbl_product_variation`.`affiliation_id`) WHEN 0 THEN 0 ELSE 1 END AS `value_id` FROM `tbl_product_variation`
      RIGHT JOIN tbl_affiliation ON `tbl_product_variation`.`affiliation_id` = `tbl_affiliation`.`affiliation_id` AND `tbl_product_variation`.`plan_id` = ".$plan_id." GROUP BY `tbl_affiliation`.`affiliation_id` ORDER BY `tbl_affiliation`.`affiliation_id` ASC"));
    return response()->json([
      'result' => $results,
      'success' => true
    ]);
  }
}
