<?php

namespace App\Http\Controllers;

use DB;
use App\Http\Controllers\ApiController;
use App\Http\Requests\SellerRequest;
use Illuminate\Http\Request;

class OrdersController extends ApiController
{
	public function __construct() {
      parent::__construct();
  }

  public function list(Request $request) {
    $result = DB::select('call PA_orderSearch(
      :pag_total_by_page,
      :pag_actual,
      :sort_by,
      :sort_direction
    )', [
      'pag_total_by_page' => $request->input('pag_total_by_page', 12),
      'pag_actual' => $request->input('pag_actual', null),
      'sort_by' => $request->input('sort_by', null),
      'sort_direction' => $request->input('sort_direction', null)
    ]);

    return response()->json([
      'result' => $result,
      'success' => true
    ]);
  	//return $this->jsonResponse(User::ofType(User::SELLER)->get(), 'sellers.all', 'success');
  }

  public function detail($order_id = null) {
    $result = DB::select('call PA_orderDetail(
      :order_id
    )', [
      'order_id' => $order_id
    ]);

    if(count($result)) {
      $order = $result[0];
      $order->items = DB::select('call PA_orderItems(
        :order_id
      )', [
        'order_id' => $order_id
      ]);
      foreach($order->items as $item) {
        if(isset($item->product_variation_id)) {
          $order->device = $item;
        }
      }
    }

    return response()->json([
      'result' => count($result) ? $order : null,
      'success' => count($result)
    ]);
  }

  public function update(Request $request, $order_id = null) {
    $credit_status = $request->input('credit_status', null);

    if(!isset($order_id) || !isset($credit_status)) {
      return response()->json([
        'error' => 'No se tienen los datos requeridos',
        'success' => false
      ]);
    }

    $result = DB::table('tbl_order')
      ->where('order_id', $order_id)
      ->update([
        'credit_status' => $credit_status
      ]);

    return response()->json([
      'result' => $credit_status,
      'success' => $result
    ]);
  }

  public function updateItem(Request $request, $order_id = null) {
    $order_item_id = $request->input('order_item_id', null);
    $stock_model_id = $request->input('stock_model_id', null);
    $variation_type_id = $request->input('variation_type_id', null);
    $affiliation_id = $request->input('affiliation_id', null);
    $plan_id = $request->input('plan_id', null);
    $contract_id = $request->input('contract_id', null);

    $set = [];
    if(isset($variation_type_id)) {
      $set[] = ['variation_type_id', '=', $variation_type_id];
    }
    if(isset($affiliation_id)) {
      $set[] = ['affiliation_id', '=', $affiliation_id];
    }
    if(isset($plan_id)) {
      $set[] = ['plan_id', '=', $plan_id];
    }
    if(isset($contract_id)) {
      $set[] = ['contract_id', '=', $contract_id];
    }

    if(count($set)) {
      $result = DB::table('tbl_product_variation')->whereColumn($set)->get();
      if(count($result)) {
        $set = ['product_variation_id' => $result[0]];
      } else {
        $set = [];
      }
    }

    if(isset($stock_model_id)) {
      $set['stock_model_id'] = $stock_model_id;
    }

    $result = DB::table('tbl_order_item')
            ->where('order_item_id', $order_item_id)
            ->update($set);

    return response()->json([
      'result' => $result,
      'success' => $result
    ]);
  }

  public function deleteItem(Request $request, $order_id = null) {
    $order_item_id = $request->input('order_item_id', null);
    $stock_model_id = $request->input('stock_model_id', null);

    $result = DB::table('tbl_order_item')
            ->where('order_item_id', $order_item_id)
            ->update(['stock_model_id' => $stock_model_id]);

    return response()->json([
      'result' => $result,
      'success' => $result
    ]);
  }

  public function createItem(Request $request, $order_id = null) {
    $variation_type_id = $request->input('variation_type_id', null);
    $stock_model_id = $request->input('stock_model_id', null);
    $affiliation_id = $request->input('affiliation_id', null);
    $plan_id = $request->input('plan_id', null);
    $contract_id = $request->input('contract_id', null);

    $set = [];
    if(isset($variation_type_id)) {
      $set[] = ['variation_type_id', '=', $variation_type_id];
    }
    if(isset($affiliation_id)) {
      $set[] = ['affiliation_id', '=', $affiliation_id];
    }
    if(isset($plan_id)) {
      $set[] = ['plan_id', '=', $plan_id];
    }
    if(isset($contract_id)) {
      $set[] = ['contract_id', '=', $contract_id];
    }

    if(count($set) > 0) {
      $result = DB::table('tbl_product_variation')->whereColumn($set)->get();
      if(count($result) > 0) {
        $set = ['product_variation_id' => $result[0]];
      } else {
        $set = [];
      }
    }

    $data = [];

    if(isset($variation_type_id)) {
      $result = DB::select('call PA_productByStock(
        :stock_model_id
      )', [
        'stock_model_id' => $stock_model_id
      ]);
    } else {
      switch($variation_type_id) {
        case 1:
          $result = DB::select('call PA_productPrepagoByStock(
            :stock_model_id,
            :product_variation_id
          )', [
            'stock_model_id' => $stock_model_id,
            'product_variation_id' => $set['product_variation_id']
          ]);
          break;
        case 2:
          $result = DB::select('call PA_productPostpagoByStock(
            :stock_model_id,
            :product_variation_id
          )', [
            'stock_model_id' => $stock_model_id,
            'product_variation_id' => $set['product_variation_id']
          ]);
          break;
      }
    }

    if(count($data)) {
      $result = DB::table('tbl_order_item')->insertGetId($data);

      return response()->json([
        'result' => $result,
        'success' => $result
      ]);
    } else {
      return response()->json([
        'error' => $result,
        'success' => false
      ]);
    }
  }

  public function tryPromo(Request $request, $order_id = null) {
    
  }

  public function applyPromo(Request $request, $order_id = null) {
    
  }

  public function statusHistory($order_id = null) {
    $result = DB::select('call PA_orderStatusHistory(
      :order_id
    )', [
      'order_id' => $order_id
    ]);
    return response()->json([
      'result' => $result,
      'success' => true
    ]);
  }

  public function createStatus(Request $request, $order_id = null) {
    $status_id = $request->input('order_status_id', null);

    if(isset($status_id)) {
      $result = DB::table('tbl_order_status_history')
        ->insertGetId([
          'order_id' => $order_id,
          'order_status_id' => $status_id,
          'notify_customer' => $request->input('notify_customer', false),
          'comment' => $request->input('comment', null)
        ]);
      return response()->json([
        'result' => $result,
        'success' => true
      ]);
    } else {
      return response()->json([
        'error' => 'Estado requerido',
        'success' => false
      ]);
    }
  }

  public function listStatus() {
    $status_list = DB::table('tbl_order_status')->get();
    return response()->json([
      'result' => count($status_list) ? $status_list : [],
      'success' => count($status_list)
    ]);
  }

  private function fakeData() {
    return '<span class=\"center-block padding-5 label label-info\">No entregado</span>';
  }
}
