<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use DB;
use Validator;
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
          ->where('product_id', $product_id)
          ->first();

      if ($product) {
        $product->product_data_sheet = asset(Storage::url($product->product_data_sheet));
        $product->product_image_url = asset(Storage::url($product->product_image_url));

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

      //Slug
      $product_slug = str_slug($product_model);

      //Image
      $brand = DB::table('tbl_brand')->where('brand_id', $brand_id)->select('brand_name')->first();

      if ($request->file('product_image')->isValid()) {
          $prefix = "productos";
          $extension = $request->file('product_image')->guessExtension();
          $product_image_path = $request->file('product_image')->storeAs($prefix.'/'.$brand->brand_name, $product_slug.'.'.$extension);
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
              'product_slug' => $product_slug,
              'product_image_url' => $product_image_url
          ]);
          DB::commit();
      } catch (\Illuminate\Database\QueryException $e) {
          DB::rollback();
          return response()->json([
            'result' => 'No se pudo registrar el producto.',
            'success' => false
          ]);
      } catch (\PDOException $e){
          return response()->json([
            'result' => 'No se pudo conectar a la base de datos.',
            'success' => false
          ]);
      } catch (\Exception $e) {
          return response()->json([
            'result' => 'Se produjo un error al registrar el producto.',
            'success' => false
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
              'product_image' => 'nullable|image'
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
          $updated_at = Carbon::now()->toDateTimeString();

          $data = [
              'product_price' => $product_price,
              'product_priority' => $product_priority,
              'updated_at' => $updated_at
          ];

          if ($request->has('product_image')) {
              $brand = DB::table('tbl_brand')->where('brand_id', $product->brand_id)->select('brand_name')->first();
              if ($request->file('product_image')->isValid()) {
                  $prefix = "productos";
                  $extension = $request->file('product_image')->guessExtension();
                  $product_image_path = $request->file('product_image')->storeAs($prefix.'/'.$brand->brand_name, $product->product_slug.'.'.$extension);
                  $data = array_add($data, 'product_image_url',$product_image_path);
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
                'success' => false
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
              'product_data_sheet' => 'nullable|mimes:pdf'
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

          ($product_description) ? $data = array_add($data, 'product_description', $product_description) : '';
          ($product_general_specifications) ? $data = array_add($data, 'product_general_specifications', $product_general_specifications) : '';
          ($product_external_memory) ? $data = array_add($data, 'product_external_memory', $product_external_memory) : '';
          ($product_internal_memory) ? $data = array_add($data, 'product_internal_memory', $product_internal_memory) : '';
          ($product_screen_size) ? $data = array_add($data, 'product_screen_size', $product_screen_size) : '';
          ($product_camera_1) ? $data = array_add($data, 'product_camera_1', $product_camera_1) : '';
          ($product_camera_2) ? $data = array_add($data, 'product_camera_2', $product_camera_2) : '';
          ($product_camera_3) ? $data = array_add($data, 'product_camera_3', $product_camera_3) : '';
          ($product_camera_4) ? $data = array_add($data, 'product_camera_4', $product_camera_4) : '';
          ($product_processor_name) ? $data = array_add($data, 'product_processor_name', $product_processor_name) : '';
          ($product_processor_power) ? $data = array_add($data, 'product_processor_power', $product_processor_power) : '';
          ($product_processor_cores) ? $data = array_add($data, 'product_processor_cores', $product_processor_cores) : '';
          ($product_band) ? $data = array_add($data, 'product_band', $product_band) : '';
          ($product_radio) ? $data = array_add($data, 'product_radio', $product_radio) : '';
          ($product_wlan) ? $data = array_add($data, 'product_wlan', $product_wlan) : '';
          ($product_bluetooth) ? $data = array_add($data, 'product_bluetooth', $product_bluetooth) : '';
          ($product_os) ? $data = array_add($data, 'product_os', $product_os) : '';
          ($product_gps) ? $data = array_add($data, 'product_gps', $product_gps) : '';
          ($product_battery) ? $data = array_add($data, 'product_battery', $product_battery) : '';

          if ($request->has('product_data_sheet')) {
              $brand = DB::table('tbl_brand')->where('brand_id', $product->brand_id)->select('brand_name')->first();
              if ($request->file('product_data_sheet')->isValid()) {
                  $prefix = "data_sheets";
                  $extension = $request->file('product_data_sheet')->guessExtension();
                  $product_data_sheet_path = $request->file('product_data_sheet')->storeAs($prefix, 'Ficha_tecnica_'.$brand->brand_name.'_'.$product->product_slug.'.'.$extension);
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
                'success' => false
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

  public function listStockModelCode($product_id) {
      $stock_model_code_list = DB::table('tbl_stock_model')
          ->where('tbl_stock_model.active', 1)
          ->where('tbl_stock_model.product_id', $product_id)
          ->join('tbl_color', 'tbl_stock_model.color_id', '=', 'tbl_color.color_id')
          ->select('tbl_stock_model.stock_model_id', 'tbl_stock_model.stock_model_code', 'tbl_stock_model.color_id')
          ->get();

      foreach ($stock_model_code_list as $stock_model_code) {
          $stock_model_code->product_images = DB::table('tbl_product_image')
              ->where('active', 1)
              ->where('stock_model_id', $stock_model_code->stock_model_id)
              ->select('product_image_id', 'product_image_url', 'weight')->get();

          foreach ($stock_model_code->product_images as $image) {
              $image->product_image_url = asset(Storage::url($image->product_image_url));
          }
      }

      return response()->json([
          'result' => $stock_model_code_list,
          'success' => true
      ]);
  }

  public function storeStockModelCode(Request $request, $product_id) {
      //Validator
      $validator = Validator::make($request->all(), [
          'color_id' => 'required|exists:tbl_color',
          'stock_model_code' => 'required|unique:tbl_stock_model',
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

      //Insert
      $stock_model_id = DB::table('tbl_stock_model')->insertGetId([
          'product_id' => $product_id,
          'color_id' => $color_id,
          'stock_model_code' => $stock_model_code
      ]);

      //Images
      $product_images = $request->product_images;

      $image_array = [];
      foreach ($product_images as $index => $item) {
          if ($item->isValid()) {
              $prefix = "productos";
              $extension = $item->guessExtension();
              $product_image_path = $item->storeAs($prefix.'/'.$product->brand_name, $product->product_slug.'-'.$index.'.'.$extension);
              $image_data = ['stock_model_id' => $stock_model_id, 'product_image_url' => $product_image_path, 'weight' => '1'];
              array_push($image_array, $image_data);
          }
      }

      DB::table('tbl_product_image')->insert($image_array);

      return response()->json([
        'result' => 'Stock Model Code registrado correctamente.',
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
                  'required',
                  Rule::unique('tbl_stock_model')->ignore($stock_model_id, 'stock_model_id')
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
          $stock_model_images = json_decode($request->input('stock_model_images'));

          $updated_at = Carbon::now()->toDateTimeString();

          $data =  [
              'color_id' => $color_id,
              'stock_model_code' => $stock_model_code,
              'updated_at' => $updated_at
          ];

          DB::table('tbl_stock_model')
              ->where('stock_model_id', $stock_model_id)
              ->update($data);

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
                      $product_image_path = $item->storeAs($prefix.'/'.$product->brand_name, $product->product_slug.'-'.$index.'.'.$extension);
                      $image_data = ['stock_model_id' => $stock_model_id, 'product_image_url' => $product_image_path, 'weight' => '1'];
                      array_push($image_array, $image_data);
                  }
              }

              DB::table('tbl_product_image')->insert($image_array);
          }

          return response()->json([
            'result' => 'Stock Model Code actualizado correctamente.',
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
          ->where('product_id', $product_id)
          ->where('variation_type_id', 1)
          ->where('active', 1)
          ->get();

      return response()->json([
        'result' => $variation_list,
        'success' => true
      ]);
  }

  public function listPostpaidProductVariation($product_id) {
      $variation_list = DB::table('tbl_product_variation')
          ->where('product_id', $product_id)
          ->where('variation_type_id', 2)
          ->where('active', 1)
          ->get();

      return response()->json([
        'result' => $variation_list,
        'success' => true
      ]);
  }

  public function storePrepaidVariation(Request $request, $product_id) {
      $product = DB::table('tbl_product')
          ->where('product_id', $product_id)
          ->where('active', 1)
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

          $variation_array = [];

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
                  'active' => 1
              ];

              array_push($variation_array, $data);
          }

          DB::table('tbl_product_variation')->insert($variation_array);

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
        ->where('active', 1)
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
                'created_by' => 1,
                'active' => 1
            ];

            DB::table('tbl_product_variation')->where('product_variation_id', $product_variation_id)->update($data);
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

  public function storePostpaidVariation(Request $request, $product_id) {
      if($product) {

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
          'color_hexcode' => 'required',
          'color_slug' => 'required|unique:tbl_color'
      ]);

      if($validator->fails()) {
        return response()->json([
          'result' => 'Los datos no cumplen con la validación establecida.',
          'messages' => $validator->errors(),
          'success' => false
        ]);
      }

      try {
          DB::beginTransaction();

          $color_name = $request->input('color_name');
          $color_hexcode = $request->input('color_hexcode');
          $color_slug = $request->input('color_slug');

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
            'success' => false
          ]);
      } catch (\PDOException $e){
          return response()->json([
            'result' => 'No se pudo conectar a la base de datos.',
            'success' => false
          ]);
      } catch (\Exception $e) {
          return response()->json([
            'result' => 'Se produjo un error al registrar el color.',
            'success' => false
          ]);
      }

      return response()->json([
        'result' => 'Color registrado correctamente.',
        'success' => true
      ]);
  }

  public function detail($product_id = null) {

  }
}
