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

class PlanController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $plan_list = DB::table('tbl_plan')->select('tbl_plan.plan_id', 'tbl_plan.plan_type', 'tbl_plan.plan_name', 'tbl_plan.plan_price', 'tbl_plan.created_at', 'tbl_plan.updated_at', 'tbl_plan.active')->get();

    return response()->json([
      'result' => $plan_list,
      'success' => true
    ]);
  }

  // Permite el registro de un nuevo plan
  public function storePlan(Request $request) {
    //Validator
    $validator = Validator::make($request->all(), [
      'plan_name' => 'required',
      'plan_price' => 'required',
      'plan_type' => 'required',
      'product_code' => 'required'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $plan_name = $request->input('plan_name');
    $plan_price = $request->input('plan_price');
    $plan_type = $request->input('plan_type');
    $product_code = $request->input('product_code');

    $plan_slug = str_slug($plan_name);

    $plan = DB::table('tbl_plan')
      ->where('plan_slug', $plan_slug)
      ->orWhere('product_code', $product_code)
      ->select('plan_id')->first();

    if (!$plan) {
      try {
        DB::beginTransaction();
        $plan_id = DB::table('tbl_plan')->insertGetId([
          'plan_type' => $plan_type,
          'plan_name' => $plan_name,
          'plan_price' => $plan_price,
          'plan_slug' => $plan_slug,
          'product_code' => $product_code,
          'created_at' => Carbon::now()->toDateTimeString(),
          'updated_at' => Carbon::now()->toDateTimeString(),
          'active' => 1
        ]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo registrar el plan.',
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
          'result' => 'Se produjo un error al registrar el plan.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }
    } else {
      return response()->json([
        'error' => 'Un plan con este nombre o código de producto ya existe.',
        'success' => false
      ]);
    }

    /*$product_id = \Config::get('settings.product_chip_id');
    $contract_id = \Config::get('settings.contract_id');

    $affiliations = $request->input('affiliations', null);

    if ($affiliations && count($affiliations) > 0) {
      switch ($plan_type) {
        case 'Prepago':
          $variation_type_id = 1;
          break;
        case 'Postpago':
          $variation_type_id = 2;
          break;
        default:
          $variation_type_id = 2;
      }
      try {
        DB::beginTransaction();
        foreach ($affiliations as $affiliation_id) {
          DB::table('tbl_product_variation')->insertGetId([
            'product_id' => $product_id,
            'plan_id' => $plan_id,
            'affiliation_id' => $affiliation_id,
            'contract_id' => $contract_id,
            'variation_type_id' => $variation_type_id,
            'product_variation_price' => ,
            'reason_code' => ,
            'product_package' => ,
            'created_at' => Carbon::now()->toDateTimeString(),
            'active' => 1
          ]);
        }
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        Log::error($e->getMessage());
      }
    }

    if ($request->hasFile('plan_chip_image') && $request->file('plan_chip_image')->isValid()) {
      $prefix = "plan_chip";
      $extension = $request->file('plan_chip_image')->guessExtension();
      $plan_chip_image = $request->file('plan_chip_image')->storeAs($prefix, $plan_slug, 'public');
      $plan_chip_image_url = asset(Storage::url($plan_chip_image));
    }
    else {
      $plan_chip_image_url = null;
    }*/

    return response()->json([
      'result' => 'Plan registrado correctamente.',
      'id' => $plan_id,
      'success' => true
    ]);
  }

  public function publishPlan($plan_id) {
    $plan = DB::table('tbl_plan')
      ->where('plan_id', $plan_id)
      ->select('plan_id')
      ->first();

    if ($plan) {
      //$publish_at = ($plan->updated_at) ? $plan->updated_at : Carbon::now()->toDateTimeString() ;

      $data = [
        'active' => 1,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_plan')
        ->where('plan_id', $plan->plan_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo publicar el plan.',
      'success' => false
    ]);
  }

  public function hidePlan($plan_id) {
    $plan = DB::table('tbl_plan')->where('plan_id', $plan_id)->select('plan_id')->first();

    if ($plan) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_plan')
        ->where('plan_id', $plan->plan_id)
        ->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo ocultar el plan.',
      'success' => false
    ]);
  }

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

    /*$product_variations = DB::table('tbl_product_variation')
      ->where('plan_id', $plan_id)
      ->where('product_id', $product_id)
      ->where('active', 1)
      ->select('affiliation_id')
      ->get();

    $plan->product_variations = [];
    if(!empty($product_variations)) {
      foreach ($product_variations as $var) {
        $plan->product_variations[$var->affiliation_id] = $var->affiliation_id;
      }
    }

    $stock_model = DB::table('tbl_stock_model')
      ->where('product_id', $product_id)
      ->where('stock_model_code', strval($plan_id))
      ->first();
    
    if($stock_model) {
      $plan->stock_model = $stock_model;
    } else {
      if (!empty($product->product_image_url)) {
        $product->product_image_url = asset(Storage::url(($product->product_image_url)));
      }
    }*/

    if (!empty($product->product_image_url)) {
      $product->product_image_url = asset(Storage::url(($product->product_image_url)));
    }

    $plan->product = $product;

    return response()->json([
      'result' => $plan,
      'success' => true
    ]);
  }

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
