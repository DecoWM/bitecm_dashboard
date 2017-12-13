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
      'result' => 'Importación completada con éxito',
      'success' => true
    ];
    $sheet = $import->first();
    $sheet->each(function($row) use (&$result) {
      $category_id = $this->_categoryExists($row['categoria']);
      if (!$category_id) {
        return;
      }
      $brand_id = $this->_brandExists($row['marca']);
      $product_id = true;
      if (!$brand_id) {
        $brand_id = $this->_insertBrand($row['marca']);
        $product_id = $this->_insertProduct($category_id, $brand_id, $row);
      } else {
        if(!$this->_productExists($brand_id, $row['modelo'])) {
          $product_id = $this->_insertProduct($category_id, $brand_id, $row);
        }
      }
      if(!$product_id) {
        $result['success'] = false;
        $result['result'] = 'No se pudo ingresar el producto '.$row['modelo'].'. Ha ocurrido un error en la base de datos.';
        return false;
      }
    });
    return response()->json($result);
  }

  public function stockModels(Request $request) {

  }

  public function variations(Request $request) {

  }

  private function _categoryExists($category) {
    $result = DB::table('tbl_category')
      ->where('category_name', $category)
      ->select('category_id')
      ->get();
    return count($result) ? $result[0]->category_id : false;
  }

  private function _brandExists($brand) {
    $result = DB::table('tbl_brand')
      ->where('brand_name', $brand)
      ->select('brand_id')
      ->get();
    return count($result) ? $result[0]->brand_id : false;
  }

  private function _insertBrand($brand) {
    $result = DB::table('tbl_brand')
      ->insertGetId([
        'brand_name' => $brand,
        'brand_slug' => Str::slug($brand)
      ]);
    return $result;
  }

  private function _productExists($brand_id, $model) {
    $result = DB::table('tbl_product')
      ->where([
        ['brand_id', '=', $brand_id],
        ['product_model', '=', $model]
      ])
      ->select('product_id')
      ->get();
    return count($result) ? $result[0]->product_id : false;
  }

  private function _insertProduct($category_id, $brand_id, $row) {
    $result = DB::table('tbl_product')
      ->insertGetId([
        'category_id' => $category_id,
        'brand_id' => $brand_id,
        'product_model' => $row['modelo'],
        'product_price' => $row['price']
      ]);
    return $result;
  }

  private function _stockModelExists($stock_model_code) {

  }

  private function _colorExists($color) {

  }

  private function _insertColor($color_name, $color_hexcode = null) {

  }

  private function _insertStockModel($product_id, $color_id, $stock_model_code) {

  }

  private function _variationTypeExists($variationType) {

  }

  private function _planExists($plan) {

  }

  private function _affiliationExists($affiliation) {

  }

  private function _contractExists($contract) {

  }

  private function _insertVariation($variation_type_id, $product_id, $plan_id, $affiliation_id = null, $contract_id = null, $row) {

  }
}