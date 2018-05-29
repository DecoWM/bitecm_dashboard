<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use Carbon\Carbon;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use App\Mail\OrderStatusChanged;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

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
      'pag_total_by_page' => $request->input('pag_total_by_page', null),
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
      $items = DB::select('call PA_orderItems(
        :order_id
      )', [
        'order_id' => $order_id
      ]);
      foreach($items as $item) {
        if(isset($item->product_variation_id)) {
          $order->device = $item;
        }
        $item->stock_models = DB::select('call PA_productStockModels(
          :product_id,
          :color_required
        )', [
          'product_id' => $item->product_id,
          'color_required' => null
        ]);
        $order->items[] = $item;
      }

      //-----------------------------------
      // agregar la orden back y next
      //-----------------------------------
      $order = $result[0];
      $items = DB::select('call PA_orderBackNext(
        :_order_id
      )', [
        '_order_id' => $order_id
      ]);
      foreach($items as $item) {
        $order->navigation = $item;
      }
    }

    return response()->json([
      'result' => count($result) ? $order : null,
      'success' => count($result)
    ]);
  }

  public function detailSimple($order_id = null) {
    $result = DB::select('call PA_orderDetail(
      :order_id
    )', [
      'order_id' => $order_id
    ]);
    return response()->json([
      'result' => count($result) ? $result[0] : null,
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
        'credit_status' => $credit_status,
        'updated_at' => Carbon::now()->toDateTimeString()
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
      $result = DB::table('tbl_product_variation')->where($set)->get();
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

    // Update product
    DB::table('tbl_order')->where('order_id', $order_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

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
      $result = DB::table('tbl_product_variation')->where($set)->get();
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
    $desired_status_id = $request->input('order_status_id', null);
    $notify_customer = $request->input('notify_customer', false);

    if (isset($desired_status_id)) {
      $valid = false;
      $current_status = DB::table('tbl_order_status_history')
        ->where('order_id', $order_id)
        ->orderBy('created_at','desc')
        ->limit(1)
        ->select('order_status_id')
        ->get();
      if (count($current_status)) {
        $current_status_id = $current_status[0]->order_status_id;
        $status_flux = DB::table('tbl_order_status_flux')
          ->where('order_status_origin_id', $current_status_id)
          ->where('order_status_destination_id', $desired_status_id)
          ->limit(1)
          ->select('order_status_flux_id')
          ->get();
        if (count($status_flux)) {
          $valid = true;
        }
      } else {
        $valid = true;
      }
      if ($valid) {
        $result = DB::table('tbl_order_status_history')
          ->insertGetId([
            'order_id' => $order_id,
            'order_status_id' => $desired_status_id,
            'notify_customer' => $notify_customer,
            'comment' => $request->input('comment', null)
          ]);

        if ($notify_customer) {
          $status = DB::table('tbl_order_status')
            ->where('order_status_id', $desired_status_id)
            ->select('order_status_name')
            ->get()[0];
          $order = DB::table('tbl_order')
            ->where('order_id', $order_id)
            ->get()[0];
          try {
            Mail::to($order->contact_email)->send(new OrderStatusChanged($order, $status));
          } catch (\Exception $e) {
            Log::warning('Error al enviar correo a '.$order->contact_email.' por cambio de estado de la orden #'.$order_id);
          }
        }

        // Update product
        DB::table('tbl_order')->where('order_id', $order_id)->update([ 'updated_at' => Carbon::now()->toDateTimeString() ]);

        return response()->json([
          'result' => 'Cambio de estado realizado con exito',
          'success' => true
        ]);
      } else {
        return response()->json([
          'result' => 'Cambio de estado no permitido',
          'success' => false
        ]);
      }
    } else {
      return response()->json([
        'result' => 'Estado requerido',
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

  public function reportGeneralOrders(Request $request) {
    $validator = Validator::make($request->all(), [
      'begin_date' => 'required',
      'end_date' => 'required',
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Las fechas on requeridas',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }
    // Recibir valores para la consulta
    $file_name = 'reporte_general_ordenes_'.Carbon::now()->timestamp;
    $begin_date = Carbon::createFromFormat('d/m/Y', $request->input('begin_date'))->format('Y-m-d');
    $end_date = Carbon::createFromFormat('d/m/Y', $request->input('end_date'))->addDays(1)->format('Y-m-d');

    // Llamar al procedimiento que devolverá los valores
    $result = DB::select('call PA_orderReport(
      :start_date, :end_date
    )', [
      'start_date' => $begin_date,
      'end_date' => $end_date
    ]);

    // Exportar reporte a Excel
    $data = array();
    foreach ($result as $row) {
       $data[] = (array)$row;
    }
    Excel::create($file_name, function($excel) use($data) {
      $excel->sheet('Reporte', function($sheet) use($data) {
          $sheet->fromArray($data, 'N/A', 'A1', true, true);
      });
    })->store('xlsx', storage_path('app/public/reportes'));

    $file = [
      'file_name' => $file_name.'.xlsx',
      'file_url' => asset(Storage::url('reportes/'.$file_name.'.xlsx'))
    ];

    // Devolver URL para descargar el Excel
    return response()->json([
      'result' => $file,
      'success' => true
    ]);
  }

  public function reportGeneralSales(Request $request) {
    $validator = Validator::make($request->all(), [
      'begin_date' => 'required',
      'end_date' => 'required',
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Las fechas on requeridas',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }
    // Recibir valores para la consulta
    $file_name = 'reporte_general_ventas_'.Carbon::now()->timestamp;
    $begin_date = Carbon::createFromFormat('d/m/Y', $request->input('begin_date'))->format('Y-m-d');
    $end_date = Carbon::createFromFormat('d/m/Y', $request->input('end_date'))->addDays(1)->format('Y-m-d');

    // Llamar al procedimiento que devolverá los valores
    $result = DB::select('call PA_orderCompletedReport(
      :start_date, :end_date
    )', [
      'start_date' => $begin_date,
      'end_date' => $end_date
    ]);

    // Exportar reporte a Excel
    $data = array();
    foreach ($result as $row) {
       $data[] = (array)$row;
    }
    Excel::create($file_name, function($excel) use($data) {
      $excel->sheet('Reporte', function($sheet) use($data) {
          $sheet->fromArray($data, 'N/A', 'A1', true, true);
      });
    })->store('xlsx', storage_path('app/public/reportes'));

    $file = [
      'file_name' => $file_name.'.xlsx',
      'file_url' => asset(Storage::url('reportes/'.$file_name.'.xlsx'))
    ];

    // Devolver URL para descargar el Excel
    return response()->json([
      'result' => $file,
      'success' => true
    ]);
  }

  public function reportBestSellers(Request $request) {
    $validator = Validator::make($request->all(), [
      'begin_date' => 'required',
      'end_date' => 'required',
    ]);

    if($validator->fails()) {
      return response()->json([
        'result' => 'Las fechas on requeridas',
        'messages' => $validator->errors(),
        'success' => false
      ]);
    }

    // Recibir valores para la consulta
    $file_name = 'reporte_productos_mas_vendidos_'.Carbon::now()->timestamp;
    $begin_date = Carbon::createFromFormat('d/m/Y', $request->input('begin_date'))->format('Y-m-d');
    $end_date = Carbon::createFromFormat('d/m/Y', $request->input('end_date'))->addDays(1)->format('Y-m-d');

    // Llamar al procedimiento que devolverá los valores
    $result = DB::select('call PA_productBestSellers(
      :start_date, :end_date
    )', [
      'start_date' => $begin_date,
      'end_date' => $end_date
    ]);

    // Exportar reporte a Excel
    $data = array();
    foreach ($result as $row) {
       $data[] = (array)$row;
    }
    Excel::create($file_name, function($excel) use($data) {
      $excel->sheet('Reporte', function($sheet) use($data) {
          $sheet->fromArray($data, 'N/A', 'A1', true, true);
      });
    })->store('xlsx', storage_path('app/public/reportes'));

    $file = [
      'file_name' => $file_name.'.xlsx',
      'file_url' => asset(Storage::url('reportes/'.$file_name.'.xlsx'))
    ];

    // Devolver URL para descargar el Excel
    return response()->json([
      'result' => $file,
      'success' => true
    ]);
  }

  private function fakeData() {
    return '<span class=\"center-block padding-5 label label-info\">No entregado</span>';
  }
}
