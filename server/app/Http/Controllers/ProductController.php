<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Carbon\Carbon;
use App\Http\Controllers\ApiController;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function list() {
    $product_list = DB::table('tbl_product')
      ->join('tbl_brand', 'tbl_product.brand_id', '=', 'tbl_brand.brand_id')
      ->join('tbl_category', 'tbl_product.category_id', '=', 'tbl_category.category_id')
      ->select('tbl_product.product_id', 'tbl_product.product_priority', DB::raw('IFNULL(tbl_product.updated_at, tbl_product.created_at) as updated_at'), 'tbl_category.category_name', 'tbl_brand.brand_name','tbl_product.product_model', 'tbl_product.publish_at', 'tbl_product.active')
      ->get();

    return response()->json([
      'result' => $product_list,
      'success' => true
    ]);
  }

  public function publishProduct($product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'publish_at')
      ->first();

    if ($product) {
      $publish_at = ($product->publish_at) ? $product->publish_at : Carbon::now()->toDateTimeString() ;

      $data = [
        'active' => 1,
        'publish_at' => $publish_at,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_product')->where('product_id', $product->product_id)->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo publicar el producto.',
      'success' => false
    ]);
  }

  public function hideProduct($product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id')
      ->first();

    if ($product) {
      $data = [
        'active' => 0,
        'updated_at' => Carbon::now()->toDateTimeString()
      ];

      DB::table('tbl_product')->where('product_id', $product->product_id)->update($data);

      return response()->json([
        'result' => $data,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo ocultar el producto.',
      'success' => false
    ]);
  }

  public function showProduct($product_id) {
    $product = DB::table('tbl_product')
      ->join('tbl_brand', 'tbl_product.brand_id', '=', 'tbl_brand.brand_id')
      ->where('product_id', $product_id)
      ->select('tbl_product.*', 'tbl_brand.brand_name')
      ->first();

    if ($product) {
      if (!empty($product->product_data_sheet)) {
        $product->product_data_sheet = asset(Storage::url($product->product_data_sheet));
      }
      if (!empty($product->product_image_url)) {
        $product->product_image_url = asset(Storage::url(($product->product_image_url)));
      }

      return response()->json([
        'result' => $product,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar el produto.',
      'success' => false
    ]);
  }

  public function storeProduct(Request $request) {
    //Validator
    $validator = Validator::make($request->all(), [
      'category_id' => 'required|exists:tbl_category',
      'brand_id' => 'required|exists:tbl_brand',
      'product_model' => 'required|unique:tbl_product',
      'product_price' => 'required|numeric',
      'product_priority' => 'required|integer',
      'product_tag' => 'nullable|string',
      'product_image' => 'required|image'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $category_id = $request->input('category_id');
    $brand_id = $request->input('brand_id');
    $product_model = $request->input('product_model');
    $product_price = $request->input('product_price');
    $product_priority = $request->input('product_priority');
    $product_tag = $request->input('product_tag');

    //Slug
    $product_slug = str_slug($product_model);

    //Image
    $brand = DB::table('tbl_brand')->where('brand_id', $brand_id)->select('brand_name')->first();

    if ($request->file('product_image')->isValid()) {
      $prefix = "productos";
      $extension = $request->file('product_image')->guessExtension();
      $product_image_path = $request->file('product_image')->storeAs($prefix.'/'.$brand->brand_name, $product_slug.'.'.$extension, 'public');
    } else {
      $product_image_path = null;
    }

    $product_image_url = $product_image_path;

    //Insert
    try {
      DB::beginTransaction();
      $product = DB::table('tbl_product')->insertGetId([
        'category_id' => $category_id,
        'brand_id' => $brand_id,
        'product_model' => $product_model,
        'product_price' => $product_price,
        'product_priority' => $product_priority,
        'product_tag' => $product_tag,
        'product_slug' => $product_slug,
        'product_image_url' => $product_image_url
      ]);
      DB::commit();
    } catch (\Illuminate\Database\QueryException $e) {
      DB::rollback();
      return response()->json([
        'result' => 'No se pudo registrar el producto.',
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
        'result' => 'Se produjo un error al registrar el producto.',
        'success' => false,
        'error' => $e->getMessage()
      ]);
    }

    return response()->json([
      'result' => 'Producto registrado correctamente.',
      'id' => $product,
      'success' => true
    ]);
  }

  public function updateProduct(Request $request, $product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'product_slug', 'brand_id')
      ->first();

    if ($product) {
      $validator = Validator::make($request->all(), [
        'product_price' => 'required|numeric',
        'product_priority' => 'required|integer',
        'product_tag' => 'nullable|string',
        'product_image' => 'nullable|image|max:10240'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $product_price = $request->input('product_price');
      $product_priority = $request->input('product_priority');
      $product_tag = $request->input('product_tag');
      $updated_at = Carbon::now()->toDateTimeString();

      $data = [
        'product_price' => $product_price,
        'product_priority' => $product_priority,
        'product_tag' => $product_tag,
        'updated_at' => $updated_at
      ];

      if ($request->has('product_image')) {
        $brand = DB::table('tbl_brand')->where('brand_id', $product->brand_id)->select('brand_name')->first();
        if ($request->file('product_image')->isValid()) {
          $prefix = "productos";
          $extension = $request->file('product_image')->guessExtension();
          $product_image_path = $request->file('product_image')->storeAs($prefix.'/'.$brand->brand_name, $product->product_slug.'.'.$extension, 'public');
          $data = array_add($data, 'product_image_url',$product_image_path);
        }
      }

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_product')->where('product_id', $product->product_id)->update($data);
        DB::table('tbl_product_variation')->where('variation_type_id', '1')->where('product_id', $product->product_id)->update(['product_variation_price' => $product_price]);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo actualizar el producto.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Producto actualizado correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar el producto.',
      'success' => false
    ]);
  }

  public function updateSpecifications(Request $request, $product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'product_slug', 'brand_id')
      ->first();

    if ($product) {
      $validator = Validator::make($request->all(), [
        'product_data_sheet' => 'nullable|mimes:pdf|max:10240'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $product_description = $request->input('product_description', null);
      $product_general_specifications = $request->input('product_general_specifications', null);
      $product_external_memory = $request->input('product_external_memory', null);
      $product_internal_memory = $request->input('product_internal_memory', null);
      $product_screen_size = $request->input('product_screen_size', null);
      $product_camera_1 = $request->input('product_camera_1', null);
      $product_camera_2 = $request->input('product_camera_2', null);
      $product_camera_3 = $request->input('product_camera_3', null);
      $product_camera_4 = $request->input('product_camera_4', null);
      $product_processor_name = $request->input('product_processor_name', null);
      $product_processor_power = $request->input('product_processor_power', null);
      $product_processor_cores = $request->input('product_processor_cores', null);
      $product_band = $request->input('product_band', null);
      $product_radio = $request->input('product_radio', null);
      $product_wlan = $request->input('product_wlan', null);
      $product_bluetooth = $request->input('product_bluetooth', null);
      $product_os = $request->input('product_os', null);
      $product_gps = $request->input('product_gps', null);
      $product_battery = $request->input('product_battery', null);

      $data = [];

      $updated_at = Carbon::now()->toDateTimeString();
      $data = array_add($data, 'updated_at', $updated_at);

      $data = array_add($data, 'product_description', $product_description);
      isset($product_general_specifications) ? $data = array_add($data, 'product_general_specifications', $product_general_specifications) : '';
      isset($product_external_memory) ? $data = array_add($data, 'product_external_memory', $product_external_memory) : '';
      isset($product_internal_memory) ? $data = array_add($data, 'product_internal_memory', $product_internal_memory) : '';
      isset($product_screen_size) ? $data = array_add($data, 'product_screen_size', $product_screen_size) : '';
      isset($product_camera_1) ? $data = array_add($data, 'product_camera_1', $product_camera_1) : '';
      isset($product_camera_2) ? $data = array_add($data, 'product_camera_2', $product_camera_2) : '';
      isset($product_camera_3) ? $data = array_add($data, 'product_camera_3', $product_camera_3) : '';
      isset($product_camera_4) ? $data = array_add($data, 'product_camera_4', $product_camera_4) : '';
      isset($product_processor_name) ? $data = array_add($data, 'product_processor_name', $product_processor_name) : '';
      isset($product_processor_power) ? $data = array_add($data, 'product_processor_power', $product_processor_power) : '';
      isset($product_processor_cores) ? $data = array_add($data, 'product_processor_cores', $product_processor_cores) : '';
      isset($product_band) ? $data = array_add($data, 'product_band', $product_band) : '';
      isset($product_radio) ? $data = array_add($data, 'product_radio', $product_radio) : '';
      isset($product_wlan) ? $data = array_add($data, 'product_wlan', $product_wlan) : '';
      isset($product_bluetooth) ? $data = array_add($data, 'product_bluetooth', $product_bluetooth) : '';
      isset($product_os) ? $data = array_add($data, 'product_os', $product_os) : '';
      isset($product_gps) ? $data = array_add($data, 'product_gps', $product_gps) : '';
      isset($product_battery) ? $data = array_add($data, 'product_battery', $product_battery) : '';

      if ($request->has('product_data_sheet') && $request->hasFile('product_data_sheet')) {
        $brand = DB::table('tbl_brand')->where('brand_id', $product->brand_id)->select('brand_name')->first();
        if ($request->file('product_data_sheet')->isValid()) {
          $prefix = "data_sheets";
          $extension = $request->file('product_data_sheet')->guessExtension();
          $product_data_sheet_path = $request->file('product_data_sheet')->storeAs($prefix, 'Ficha_tecnica_'.$brand->brand_name.'_'.$product->product_slug.'.'.$extension, 'public');
          $data = array_add($data, 'product_data_sheet', $product_data_sheet_path);
        }
      }

      //Insert
      try {
        DB::beginTransaction();
        DB::table('tbl_product')->where('product_id', $product->product_id)->update($data);
        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudo actualizar el producto.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Producto actualizado correctamente.',
        'product_data_sheet_path' => isset($product_data_sheet_path) ? $product_data_sheet_path : null,
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar el producto.',
      'success' => false
    ]);
  }

  public function listStockModelCode($product_id) {
    $stock_model_code_list = DB::table('tbl_stock_model')
      ->where('tbl_stock_model.product_id', $product_id)
      ->leftJoin('tbl_color', 'tbl_stock_model.color_id', '=', 'tbl_color.color_id')
      ->select('tbl_stock_model.stock_model_id', 'tbl_stock_model.stock_model_code', 'tbl_stock_model.color_id', 'tbl_stock_model.active')
      ->get();

    foreach ($stock_model_code_list as $stock_model_code) {
      $stock_model_code->product_images = DB::table('tbl_product_image')
        ->where('active', 1)
        ->where('stock_model_id', $stock_model_code->stock_model_id)
        ->select('product_image_id', 'product_image_url', 'weight')
        ->orderBy('weight', 'asc')
        ->get();

      foreach ($stock_model_code->product_images as $image) {
        $image->product_image_url = asset(Storage::url($image->product_image_url));
      }
    }

    return response()->json([
      'result' => $stock_model_code_list,
      'success' => true
    ]);
  }

  public function getStockModelCode(Request $request, $product_id, $stock_model_id) {
    $stock_model_code = DB::table('tbl_stock_model')
      ->where('tbl_stock_model.stock_model_id', $stock_model_id)
      ->leftJoin('tbl_color', 'tbl_stock_model.color_id', '=', 'tbl_color.color_id')
      ->select('tbl_stock_model.stock_model_id', 'tbl_stock_model.stock_model_code', 'tbl_stock_model.color_id', 'tbl_stock_model.active')
      ->first();

    if ($stock_model_code) {
      $stock_model_code->product_images = DB::table('tbl_product_image')
        ->where('active', 1)
        ->where('stock_model_id', $stock_model_code->stock_model_id)
        ->select('product_image_id', 'product_image_url', 'weight')
        ->orderBy('weight', 'asc')
        ->get();

      foreach ($stock_model_code->product_images as $image) {
        $image->product_image_url = asset(Storage::url($image->product_image_url));
      }
    }

    return response()->json([
      'result' => $stock_model_code,
      'success' => true
    ]);
  }

  public function storeStockModelCode(Request $request, $product_id) {
    //Validator
    $validator = Validator::make($request->all(), [
      'color_id' => 'required|exists:tbl_color',
      'stock_model_code' => 'required',//|unique:tbl_stock_model',
      'product_images' => 'nullable|array',
      'product_images.*' => 'nullable|image'
    ]);

    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->join('tbl_brand', 'tbl_product.brand_id', '=', 'tbl_brand.brand_id')
      ->select('tbl_brand.brand_name', 'product_slug')
      ->first();

    $validator->after(function ($validator) use ($product_id, $product) {
      if (!$product) {
        $validator->errors()->add('product_id', 'The selected product id is invalid.');
      }
    });

    if($validator->fails()) {
      return response()->json([
        'result' => 'Los datos no cumplen con la validación establecida.',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    //Inputs
    $color_id = $request->input('color_id');
    $stock_model_code = $request->input('stock_model_code');
    $active = $request->input('active', 1);

    $result = DB::table('tbl_stock_model')
      ->where('product_id', $product_id)
      ->where(function ($subquery) use ($color_id, $stock_model_code) {
        $subquery
          ->where('color_id', $color_id)
          ->orWhere('stock_model_code', $stock_model_code);
      })
      ->select('stock_model_id')
      ->get();

    if (count($result)) {
      return response()->json([
        'result' => 'Ya existe un modelo de stock con el mismo color o código',
        'success' => false
      ]);
    }

    //Insert
    $stock_model_id = DB::table('tbl_stock_model')->insertGetId([
      'product_id' => $product_id,
      'color_id' => $color_id,
      'stock_model_code' => $stock_model_code,
      'active' => $active
    ]);

    // Update product
    DB::table('tbl_product')->where('product_id', $product_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

    //Images
    $product_images = $request->product_images?:[];

    $image_array = [];
    foreach ($product_images as $index => $item) {
      if ($item->isValid()) {
        $prefix = "productos";
        $extension = $item->guessExtension();
        $product_image_path = $item->storeAs($prefix.'/'.$product->brand_name, $stock_model_id.'-'.$product->product_slug.'-'.($index+1).'.'.$extension, 'public');
        $image_data = ['stock_model_id' => $stock_model_id, 'product_image_url' => $product_image_path, 'weight' => '1'];
        array_push($image_array, $image_data);
      }
    }

    DB::table('tbl_product_image')->insert($image_array);

    return response()->json([
      'result' => 'Modelo de stock registrado correctamente.',
      'id' => $stock_model_id,
      'success' => true
    ]);
  }

  public function updateStockModelCode(Request $request, $product_id, $stock_model_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->join('tbl_brand', 'tbl_product.brand_id', '=', 'tbl_brand.brand_id')
      ->select('tbl_brand.brand_name', 'product_slug')
      ->first();

    if ($product) {
      //Validator
      $validator = Validator::make($request->all(), [
        'color_id' => 'required|exists:tbl_color',
        'stock_model_code' => [
          'required'/*,
          Rule::unique('tbl_stock_model')->ignore($stock_model_id, 'stock_model_id')*/
        ],
        'stock_model_images' => 'required|json',
        'product_images' => 'nullable|array',
        'product_images.*' => 'nullable|image'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      //Input
      $color_id = $request->input('color_id');
      $stock_model_code = $request->input('stock_model_code');

      $result = DB::table('tbl_stock_model')
        ->where('product_id', $product_id)
        ->where('stock_model_id', '<>', $stock_model_id)
        ->where(function ($subquery) use ($color_id, $stock_model_code) {
          $subquery
            ->where('color_id', $color_id)
            ->orWhere('stock_model_code', $stock_model_code);
        })
        ->select('stock_model_id')
        ->get();

      if (count($result)) {
        return response()->json([
          'result' => 'Ya existe un modelo de stock con el mismo color o código',
          'success' => false
        ]);
      }

      $stock_model_images = json_decode($request->input('stock_model_images'));
      $active = $request->input('active', 1);

      $updated_at = Carbon::now()->toDateTimeString();

      $data =  [
        'color_id' => $color_id,
        'stock_model_code' => $stock_model_code,
        'active' => $active,
        'updated_at' => $updated_at
      ];

      DB::table('tbl_stock_model')
        ->where('stock_model_id', $stock_model_id)
        ->update($data);

      // Update product
      DB::table('tbl_product')->where('product_id', $product_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

      foreach ($stock_model_images as $image) {
        DB::table('tbl_product_image')
          ->where('product_image_id', $image->product_image_id)
          ->update([
            'weight' => $image->weight,
            'updated_at' => $updated_at
          ]);
      }

      if ($request->has('product_images')) {
        //Images
        $product_images = $request->product_images;

        $image_array = [];
        foreach ($product_images as $index => $item) {
          if ($item->isValid()) {
            $prefix = "productos";
            $extension = $item->guessExtension();
            $product_image_path = $item->storeAs($prefix.'/'.$product->brand_name, $stock_model_id.'-'.$product->product_slug.'-'.($index+count($stock_model_images)+1).'.'.$extension, 'public');
            $image_data = ['stock_model_id' => $stock_model_id, 'product_image_url' => $product_image_path, 'weight' => '1'];
            array_push($image_array, $image_data);
          }
        }

        DB::table('tbl_product_image')->insert($image_array);
      }

      return response()->json([
        'result' => 'Modelo de stock actualizado correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
        'result' => 'No se pudo encontrar el producto.',
        'success' => false
    ]);
  }

  public function deleteProductImage($product_image_id) {
    $product_image = DB::table('tbl_product_image')->select('product_image_id')->first();

    if($product_image) {
      $updated_at = Carbon::now()->toDateTimeString();
      $deleted_at = $updated_at;

      $data = [
        'active' => 0,
        'deleted_by' => 1,
        'updated_at' => $updated_at,
        'deleted_at' => $deleted_at
      ];

      DB::table('tbl_product_image')
        ->where('product_image_id', $product_image_id)
        ->update($data);

      return response()->json([
        'result' => 'Imagen borrada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se pudo encontrar la imagen.',
      'success' => false
    ]);
  }

  public function listPrepaidProductVariation($product_id) {
    $variation_list = DB::table('tbl_product_variation')
      ->leftJoin('tbl_promo', 'tbl_product_variation.product_variation_id', '=', 'tbl_promo.product_variation_id')
      ->where('tbl_product_variation.product_id', $product_id)
      ->where('tbl_product_variation.variation_type_id', 1)
      ->orderBy('tbl_product_variation.plan_id')
      ->select('tbl_product_variation.*', 'tbl_promo.promo_id', 'tbl_promo.promo_price', 'tbl_promo.promo_discount')
      ->get();

    return response()->json([
      'result' => $variation_list,
      'success' => true
    ]);
  }

  public function listPostpaidProductVariation($product_id, $affiliation_id, $contract_id) {
    $variation_list = DB::table('tbl_product_variation')
      ->leftJoin('tbl_promo', 'tbl_product_variation.product_variation_id', '=', 'tbl_promo.product_variation_id')
      ->where('tbl_product_variation.product_id', $product_id)
      ->where('tbl_product_variation.affiliation_id', $affiliation_id)
      ->where('tbl_product_variation.contract_id', $contract_id)
      ->where('tbl_product_variation.variation_type_id', 2)
      ->orderBy('tbl_product_variation.plan_id')
      ->select('tbl_product_variation.*', 'tbl_promo.promo_id', 'tbl_promo.promo_price', 'tbl_promo.promo_discount')
      ->get();

    return response()->json([
      'result' => $variation_list,
      'success' => true
    ]);
  }

  public function storePrepaidVariation(Request $request, $product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'product_price')
      ->first();

    if($product) {
      //Validator
      $validator = Validator::make($request->all(), [
        'variation_type_id' => 'nullable|exists:tbl_variation_type',
        'affiliation_id' => 'nullable|exists:tbl_affiliation',
        'contract_id' => 'nullable|exists:tbl_contract',
        'variation' => 'required|json'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $product_id = $product_id;
      $variation_type_id = $request->has('variation_type_id') ? $request->input('variation_type_id') : 1;
      $affiliation_id = $request->has('affiliation_id') ? $request->input('affiliation_id') : null;
      $contract_id = $request->has('contract_id') ? $request->input('contract_id') : null;

      $created_at = Carbon::now()->toDateTimeString();
      $updated_at = $created_at;

      $variation = json_decode($request->variation);

      try {
        DB::beginTransaction();

        foreach ($variation as $item) {
          $data = [
              'variation_type_id' => $variation_type_id,
              'product_id' => $product_id,
              'plan_id' => $item->plan_id,
              'affiliation_id' => $affiliation_id,
              'contract_id' => $contract_id,
              'product_variation_price' => array_has($item, 'product_variation_price') ? $item->product_variation_price : $product->product_price,
              'reason_code' => $item->reason_code ? $item->reason_code : null,
              'product_package' => $item->product_package ? $item->product_package : null,
              'created_at' => $created_at,
              'updated_at' => $updated_at,
              'created_by' => 1,
              'active' => isset($item->active) ? $item->active : 1
          ];

          $product_variation_id = DB::table('tbl_product_variation')->insertGetId($data);

          if (isset($product_variation_id)) {
            if(!isset($item->promo_id)) $item->promo_id = null;
            $this->saveVariationPromo($product_id, $product_variation_id, $item->promo_id, $item->promo_price, $item->promo_discount);
          }
        }

        // Update product
        DB::table('tbl_product')->where('product_id', $product_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudieron guardar las variaciones.',
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
          'result' => 'Se produjo un error al guardar las variaciones.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Variación registrada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se encontró el producto.',
      'success' => false
    ]);
  }

  public function updatePrepaidVariation(Request $request, $product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'product_price')
      ->first();

    if($product) {
      //Validator
      $validator = Validator::make($request->all(), [
        'variation_type_id' => 'nullable|exists:tbl_variation_type',
        'affiliation_id' => 'nullable|exists:tbl_affiliation',
        'contract_id' => 'nullable|exists:tbl_contract',
        'variation' => 'required|json'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $product_id = $product->product_id;
      $variation_type_id = $request->has('variation_type_id') ? $request->input('variation_type_id') : 1;
      $affiliation_id = $request->has('affiliation_id') ? $request->input('affiliation_id') : null;
      $contract_id = $request->has('contract_id') ? $request->input('contract_id') : null;

      $updated_at = Carbon::now()->toDateTimeString();

      $variation = json_decode($request->variation);

      try {
        DB::beginTransaction();

        foreach ($variation as $item) {
          $product_variation_id = $item->product_variation_id;
          $data = [
            'variation_type_id' => $variation_type_id,
            'product_id' => $product_id,
            // 'plan_id' => $item->plan_id,
            'affiliation_id' => $affiliation_id,
            'contract_id' => $contract_id,
            'product_variation_price' => array_has($item, 'product_variation_price') ? $item->product_variation_price : $product->product_price,
            'reason_code' => $item->reason_code ? $item->reason_code : null,
            'product_package' => $item->product_package ? $item->product_package : null,
            'updated_at' => $updated_at,
            'updated_by' => 1,
            'active' => isset($item->active) ? $item->active : 1
          ];

          DB::table('tbl_product_variation')->where('product_variation_id', $product_variation_id)->update($data);

          if(!isset($item->promo_id)) $item->promo_id = null;
          $this->saveVariationPromo($product_id, $product_variation_id, $item->promo_id, $item->promo_price, $item->promo_discount);
        }

        // Update product
        DB::table('tbl_product')->where('product_id', $product_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudieron guardar las variaciones.',
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
          'result' => 'Se produjo un error al guardar las variaciones.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Variación actualizada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se encontró el producto.',
      'success' => false
    ]);
  }

  public function storePostpaidProductVariation(Request $request, $product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'product_price')
      ->first();

    if($product) {
      //Validator
      $validator = Validator::make($request->all(), [
        'variation_type_id' => 'nullable|exists:tbl_variation_type',
        'affiliation_id' => 'required|exists:tbl_affiliation',
        'contract_id' => 'required|exists:tbl_contract',
        'variation' => 'required|json'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      $product_id = $product->product_id;
      $variation_type_id = $request->has('variation_type_id') ? $request->input('variation_type_id') : 2;
      $affiliation_id = $request->input('affiliation_id');
      $contract_id  = $request->input('contract_id');

      $created_at = Carbon::now()->toDateTimeString();
      $updated_at = $created_at;

      $variation = json_decode($request->variation);

      try {
        DB::beginTransaction();

        foreach ($variation as $item) {
          $data = [
            'variation_type_id' => $variation_type_id,
            'product_id' => $product_id,
            'plan_id' => $item->plan_id,
            'affiliation_id' => $affiliation_id,
            'contract_id' => $contract_id,
            'product_variation_price' => $item->product_variation_price,
            'reason_code' => $item->reason_code ? $item->reason_code : null,
            'product_package' => $item->product_package ? $item->product_package : null,
            'created_at' => $created_at,
            'updated_at' => $updated_at,
            'created_by' => 1,
            'active' => isset($item->active) ? $item->active : 1
          ];

          $product_variation_id = DB::table('tbl_product_variation')->insertGetId($data);

          if (isset($product_variation_id)) {
            if(!isset($item->promo_id)) $item->promo_id = null;
            $this->saveVariationPromo($product_id, $product_variation_id, $item->promo_id, $item->promo_price, $item->promo_discount);
          }
        }

        // Update product
        DB::table('tbl_product')->where('product_id', $product_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudieron guardar las variaciones.',
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
          'result' => 'Se produjo un error al guardar las variaciones.',
          'success' => false,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Variación registrada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se encontró el producto.',
      'success' => false
    ]);
  }

  public function updatePostpaidProductVariation(Request $request, $product_id) {
    $product = DB::table('tbl_product')
      ->where('product_id', $product_id)
      ->select('product_id', 'product_price')
      ->first();

    if($product) {
      //Validator
      $validator = Validator::make($request->all(), [
        'variation_type_id' => 'nullable|exists:tbl_variation_type',
        'affiliation_id' => 'nullable|exists:tbl_affiliation',
        'contract_id' => 'nullable|exists:tbl_contract',
        'variation' => 'required|json'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      // $product_id = $product->product_id;
      $variation_type_id = $request->has('variation_type_id') ? $request->input('variation_type_id') : 2;
      // $affiliation_id = $request->input('affiliation_id');
      // $contract_id  = $request->input('contract_id');

      $updated_at = Carbon::now()->toDateTimeString();

      $variation = json_decode($request->variation);
      
      try {
        DB::beginTransaction();

        foreach ($variation as $item) {
          $product_variation_id = $item->product_variation_id;
          $data = [
            'variation_type_id' => $variation_type_id,
            // 'product_id' => $product_id,
            // 'plan_id' => $item->plan_id,
            // 'affiliation_id' => $affiliation_id,
            // 'contract_id' => $contract_id,
            'product_variation_price' => array_has($item, 'product_variation_price') ? $item->product_variation_price : $product->product_price,
            'reason_code' => $item->reason_code ? $item->reason_code : null,
            'product_package' => $item->product_package ? $item->product_package : null,
            'updated_at' => $updated_at,
            'updated_by' => 1,
            'active' => isset($item->active) ? $item->active : 1
          ];

          DB::table('tbl_product_variation')->where('product_variation_id', $product_variation_id)->update($data);

          if(!isset($item->promo_id)) $item->promo_id = null;
          $this->saveVariationPromo($product_id, $product_variation_id, $item->promo_id, $item->promo_price, $item->promo_discount);
        }

        // Update product
        DB::table('tbl_product')->where('product_id', $product_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

        DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
        DB::rollback();
        return response()->json([
          'result' => 'No se pudieron actualizar las variaciones.',
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
          'result' => 'Se produjo un error al actualizar las variaciones.',
          'success' => false ,
          'error' => $e->getMessage()
        ]);
      }

      return response()->json([
        'result' => 'Variación actualizada correctamente.',
        'success' => true
      ]);
    }

    return response()->json([
      'result' => 'No se encontró el producto.',
      'success' => false
    ]);
  }

  //Lista de planes prepago
  public function listPrepaid() {
    $prepaid_list = DB::table('tbl_plan')
      ->where('active', 1)
      ->where('plan_type', 'Prepago')
      ->select('plan_id', 'plan_name')
      ->get();

    return response()->json([
      'result' => $prepaid_list,
      'success' => true
    ]);
  }

  //Lista de planes postpago
  public function listPostpaid() {
    $prepaid_list = DB::table('tbl_plan')
      ->where('active', 1)
      ->where('plan_type', 'Postpago')
      ->select('plan_id', 'plan_name')
      ->get();

    return response()->json([
      'result' => $prepaid_list,
      'success' => true
    ]);
  }

  public function listAffiliation() {
    $affiliation_list = DB::table('tbl_affiliation')
      ->where('active', 1)
      ->select('affiliation_id', 'affiliation_name')
      ->get();

    return response()->json([
      'result' => $affiliation_list,
      'success' => true
    ]);
  }

  public function listContract() {
    $contract_list = DB::table('tbl_contract')
      ->where('active', 1)
      ->select('contract_id', 'contract_name')
      ->get();

    return response()->json([
      'result' => $contract_list,
      'success' => true
    ]);
  }

  public function listCategory() {
    $category_list = DB::table('tbl_category')
      ->where('active', 1)
      ->select('category_id', 'category_name')
      ->get();

    return response()->json([
      'result' => $category_list,
      'success' => true
    ]);
  }

  public function listBrand() {
    $brand_list = DB::table('tbl_brand')
      ->where('active', 1)
      ->select('brand_id', 'brand_name')
      ->get();

    return response()->json([
      'result' => $brand_list,
      'success' => true
    ]);
  }

  public function listColor() {
    $color_list = DB::table('tbl_color')
      ->where('active', 1)
      ->select('color_id', 'color_name')
      ->get();

    return response()->json([
      'result' => $color_list,
      'success' => true
    ]);
  }

  public function listVariation() {
    $variation_list = DB::table('tbl_variation_type')
      ->where('active', 1)
      ->select('variation_type_id', 'variation_type_name')
      ->get();

    return response()->json([
      'result' => $variation_list,
      'success' => true
    ]);
  }

  public function storeColor(Request $request) {
    $validator = Validator::make($request->all(), [
      'color_name' => 'required|unique:tbl_color',
      'color_hexcode' => 'required|unique:tbl_color'
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Ya existe un color con el mismo nombre o código',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    try {
      DB::beginTransaction();

      $color_name = $request->input('color_name');
      $color_hexcode = $request->input('color_hexcode');
      $color_slug = str_slug($color_name);

      $color = DB::table('tbl_color')->insertGetId([
        'color_name' => $color_name,
        'color_hexcode' => $color_hexcode,
        'color_slug' => $color_slug,
      ]);

      DB::commit();
    } catch (\Illuminate\Database\QueryException $e) {
      DB::rollback();
      return response()->json([
        'result' => 'No se pudo registrar el color.',
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
        'result' => 'Se produjo un error al registrar el color.',
        'success' => false,
        'error' => $e->getMessage()
      ]);
    }

    return response()->json([
      'result' => 'Color registrado correctamente.',
      'id' => $color,
      'success' => true
    ]);
  }

  public function testPromo() {
    //dd($this->saveVariationPromo(18, 488, null, null));
    dd($this->saveVariationPromo(18, 488, 1500, 0.50));
  }

  private function saveVariationPromo($product_id, $product_variation_id, $promo_id, $promo_price, $promo_discount) {
    /*$promo = DB::table('tbl_promo')
      ->where('product_id', $product_id)
      ->where('product_variation_id', $product_variation_id)
      ->first();*/

    if (empty($promo_id)) {
      if (empty($promo_price) || empty($promo_discount)) {
        return [
          'result' => 'Para registrar una promoción se necesitan el precio y el descuento',
          'success' => false
        ];
      } else {
        try {
          $promo_id = DB::table('tbl_promo')->insertGetId([
            'product_id' => $product_id,
            'product_variation_id' => $product_variation_id,
            'promo_price' => floatval($promo_price),
            'promo_discount' => floatval($promo_discount),
            'promo_start_date' => Carbon::now()->toDateTimeString(),
            'promo_expiration_date' => Carbon::now()->toDateTimeString(),
            'publish_at' => Carbon::now()->toDateTimeString(),
            'publish_by' => 1,
            'active' => 1
          ]);
        } catch (\Illuminate\Database\QueryException $e) {
          throw $e;
          /*return [
            'result' => 'No se pudo registrar la promoción.',
            'success' => false,
            'error' => $e->getMessage()
          ];*/
        } catch (\PDOException $e) {
          throw $e;
          /*return [
            'result' => 'No se pudo conectar a la base de datos.',
            'success' => false,
            'error' => $e->getMessage()
          ];*/
        } catch (\Exception $e) {
          throw $e;
          /*return [
            'result' => 'Se produjo un error al registrar la promoción.',
            'success' => false,
            'error' => $e->getMessage()
          ];*/
        }
      }
    } else {
      try {
        $result = DB::table('tbl_promo')
          ->where('promo_id', $promo_id)
          ->update([
            'promo_price' => empty($promo_price) ? null : floatval($promo_price),
            'promo_discount' => empty($promo_discount) ? null : floatval($promo_discount),
            'updated_at' => Carbon::now()->toDateTimeString(),
            'updated_by' => 1,
            'active' => !empty($promo_price) && !empty($promo_discount)
          ]);
      } catch (\Illuminate\Database\QueryException $e) {
        throw $e;
        /*return [
          'result' => 'No se pudo actualizar la promoción.',
          'success' => false,
          'error' => $e->getMessage()
        ];*/
      } catch (\PDOException $e) {
        throw $e;
        /*return [
          'result' => 'No se pudo conectar a la base de datos.',
          'success' => false,
          'error' => $e->getMessage()
        ];*/
      } catch (\Exception $e) {
        throw $e;
        /*return [
          'result' => 'Se produjo un error al actualizar la promoción.',
          'success' => false,
          'error' => $e->getMessage()
        ];*/
      }
    }

    /*return [
      'result' => 'Promoción guardada correctamente.',
      'id' => $promo_id,
      'success' => true
    ];*/
  }  
}
