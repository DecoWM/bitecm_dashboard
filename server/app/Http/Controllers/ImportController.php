<?php

namespace App\Http\Controllers;

use DB;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Http\Files\ImportFile;
use Illuminate\Support\Str as Str;

class ImportController extends ApiController
{
  public function __construct() {
    parent::__construct();
  }

  public function products(ImportFile $import) {
    $result = [
      'result' => 'Importación de productos completada con éxito',
      'success' => true
    ];
    $sheet = $import->first();
    $sheet->each(function($row) use (&$result) {
      $category_id = $this->_categoryExists($row['category']);
      if (!$category_id) {
        return;
      }
      $brand_id = $this->_brandExists($row['brand']);
      $product_id = true;
      if (!$brand_id) {
        $brand_id = $this->_insertBrand($row['brand']);
        $product_id = $this->_insertProduct($category_id, $brand_id, $row);
      } else {
        if(!$this->_productExists($brand_id, $row['model'])) {
          $product_id = $this->_insertProduct($category_id, $brand_id, $row);
        }
      }
      if(!$product_id) {
        $result['success'] = false;
        $result['result'] = 'No se pudo ingresar el producto '.$row['model'].'. Ha ocurrido un error en la base de datos.';
        return false;
      }
    });
    return response()->json($result);
  }

  public function stockModels(ImportFile $import) {
    $result = [
      'result' => 'Importación de stock model codes completada con éxito',
      'success' => true
    ];
    $sheet = $import->first();
    $sheet->each(function($row) use (&$result) {
      $stock_model_id = $this->_stockModelExists($row['stock_model_code']);
      if ($stock_model_id) {
        return;
      }
      $brand_id = $this->_brandExists($row['brand']);
      if (!$brand_id) {
        return;
      }
      $product_id = $this->_productExists($brand_id, $row['model']);
      if(!$product_id) {
        return;
      }
      if (!empty($row['color'])) {
        $color_id = $this->_colorExists($row['color']);
        if (!$color_id) {
          $color_id = $this->_insertColor($row['color']);
          if (!$color_id) {
            $result['success'] = false;
            $result['result'] = 'No se pudo ingresar el color '.$row['color'].'. Ha ocurrido un error en la base de datos.';
            return false;
          }
        }
      } else {
        $color_id = null;
      }
      $stock_model_id = $this->_insertStockModel($product_id, $color_id, $row['stock_model_code']);
      if (!$stock_model_id) {
        $result['success'] = false;
        $result['result'] = 'No se pudo ingresar el stock model code '.$row['stock_model_code'].'. Ha ocurrido un error en la base de datos.';
        return false;
      }
    });
    return response()->json($result);
  }

  public function variations(ImportFile $import) {
    $result = [
      'result' => 'Importación de variaciones completada con éxito',
      'success' => true
    ];
    $sheet = $import->first();
    $sheet->each(function($row) use (&$result) {
      $variation_type_id = $this->_variationTypeExists($row['type']);
      if (!$variation_type_id) {
        return;
      }
      $brand_id = $this->_brandExists($row['brand']);
      if (!$brand_id) {
        return;
      }
      $product_id = $this->_productExists($brand_id, $row['model']);
      if(!$product_id) {
        return;
      }
      $plan_id = $this->_planExists($row['plan']);
      if(!$plan_id) {
        return;
      }
      switch ($variation_type_id) {
        case 1:
          $affiliation_id = null;
          $contract_id = null;
          $postpago_props = '';
          break;
        case 2:
          $affiliation_id = $this->_affiliationExists($row['affiliation']);
          if(!$affiliation_id) {
            return;
          }
          $contract_id = $this->_contractExists($row['contract']);
          if(!$contract_id) {
            return;
          }
          $postpago_props = ', '.$row['affiliation'].', '.$row['contract'];
          break;
      }
      $product_variation_id = $this->_insertVariation($variation_type_id, $product_id, $plan_id, $affiliation_id, $contract_id, $row);
      if (!$product_variation_id) {
        $result['success'] = false;
        $result['result'] = 'No se pudo ingresar la variación '.$row['type'].' ('.$row['plan'].$postpago_props.'). Ha ocurrido un error en la base de datos.';
        return false;
      }
    });
    return response()->json($result);
  }

  private function _categoryExists($category_name) {
    $result = DB::table('tbl_category')
      ->where('category_name', $category_name)
      ->select('category_id')
      ->get();
    return count($result) ? $result[0]->category_id : false;
  }

  private function _brandExists($brand_name) {
    $result = DB::table('tbl_brand')
      ->where('brand_name', $brand_name)
      ->select('brand_id')
      ->get();
    return count($result) ? $result[0]->brand_id : false;
  }

  private function _insertBrand($brand_name) {
    $result = DB::table('tbl_brand')
      ->insertGetId([
        'brand_name' => $brand_name,
        'brand_slug' => Str::slug($brand_name)
      ]);
    return $result;
  }

  private function _productExists($brand_id, $product_model) {
    $result = DB::table('tbl_product')
      ->where([
        ['brand_id', '=', $brand_id],
        ['product_model', '=', $product_model]
      ])
      ->select('product_id')
      ->get();
    return count($result) ? $result[0]->product_id : false;
  }

  private function _insertProduct($category_id, $brand_id, $row) {
    $now = new \DateTime('America/Lima');
    $result = DB::table('tbl_product')
      ->insertGetId([
        'category_id' => $category_id,
        'brand_id' => $brand_id,
        'product_model' => $row['model'],
        'product_price' => !empty($row['price']) ? $row['price'] : 0,
        'product_slug' => Str::slug($row['model']),
        'product_tag' => $this->_validTag($row['tag']) ? $row['tag'] : null,
        'product_description' => $row['description'],
        'product_general_specifications' => $row['general_specifications'],
        'product_ram_memory' => $row['ram'],
        'product_internal_memory' => $row['internal_memory'],
        'product_screen_size' => $row['screen_size'],
        'product_camera_1' => $row['camera_1'],
        'product_camera_2' => $row['camera_2'],
        'product_camera_3' => $row['camera_3'],
        'product_camera_4' => $row['camera_4'],
        'product_processor_name' => $row['processor_name'],
        'product_processor_power' => $row['processor_power'],
        'product_processor_cores' => $row['processor_cores'],
        'product_band' => $row['band'],
        'publish_at' => $now->format('Y-m-h H:i:s'),
        'active' => 1
      ]);
    return $result;
  }

  private function _stockModelExists($stock_model_code) {
    $result = DB::table('tbl_stock_model')
      ->where('stock_model_code', $stock_model_code)
      ->select('stock_model_id')
      ->get();
    return count($result) ? $result[0]->stock_model_id : false;
  }

  private function _colorExists($color_name) {
    $result = DB::table('tbl_color')
      ->where('color_name', $color_name)
      ->select('color_id')
      ->get();
    return count($result) ? $result[0]->color_id : false;
  }

  private function _insertColor($color_name, $color_hexcode = null) {
    $result = DB::table('tbl_color')
      ->insertGetId([
        'color_name' => $color_name,
        'color_hexcode' => !empty($color_hexcode) ? $color_hexcode : '000000',
        'color_slug' => Str::slug($color_name)
      ]);
    return $result;
  }

  private function _insertStockModel($product_id, $color_id, $stock_model_code) {
    $result = DB::table('tbl_stock_model')
      ->insertGetId([
        'product_id' => $product_id,
        'color_id' => $color_id,
        'stock_model_code' => $stock_model_code
      ]);
    return $result;
  }

  private function _variationTypeExists($variation_type_name) {
    $result = DB::table('tbl_variation_type')
      ->where('variation_type_name', $variation_type_name)
      ->select('variation_type_id')
      ->get();
    return count($result) ? $result[0]->variation_type_id : false;
  }

  private function _planExists($plan_name) {
    $result = DB::table('tbl_plan')
      ->where('plan_name', $plan_name)
      ->select('plan_id')
      ->get();
    return count($result) ? $result[0]->plan_id : false;
  }

  private function _affiliationExists($affiliation_name) {
    $result = DB::table('tbl_affiliation')
      ->where('affiliation_name', $affiliation_name)
      ->select('affiliation_id')
      ->get();
    return count($result) ? $result[0]->affiliation_id : false;
  }

  private function _contractExists($contract_name) {
    $result = DB::table('tbl_contract')
      ->where('contract_name', $contract_name)
      ->select('contract_id')
      ->get();
    return count($result) ? $result[0]->contract_id : false;
  }

  private function _insertVariation($variation_type_id, $product_id, $plan_id, $affiliation_id = null, $contract_id = null, $row) {
    $result = DB::table('tbl_product_variation')
      ->insertGetId([
        'variation_type_id' => $variation_type_id,
        'product_id' => $product_id,
        'plan_id' => $plan_id,
        'affiliation_id' => $affiliation_id,
        'contract_id' => $contract_id,
        'product_variation_price' => $row['price'],
        'reason_code' => $row['reason_code'],
        'product_package' => $row['product_package']
      ]);
    return $result;
  }

  private function _validTag($tag) {
    return $tag == 'Nuevo' || $tag = 'Destacado';
  }
}