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
      $result[0]['items'] = DB::select('call PA_orderItems(
        :order_id
      )', [
        'order_id' => $order_id
      ]);
    }

    return response()->json([
      'result' => count($result) ? $result[0] : null,
      'success' => count($result)
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
            'product_variation_id' => $product_variation_id
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
    $status = DB::table('tbl_order_status')->get();
    return response()->json([
      'result' => $status,
      'success' => true
    ]);
  }

  private function fakeData() {
    $data = [
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1000",
        "purchase" => "2017/04/19",
        "customerId" => "41810919",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 94.56",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1001",
        "purchase" => "2017/03/06",
        "customerId" => "99066778",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 27.86",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1002",
        "purchase" => "2017/07/29",
        "customerId" => "31191112",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 4.56",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1003",
        "purchase" => "2017/04/01",
        "customerId" => "38579355",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 3.16",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1004",
        "purchase" => "2016/12/09",
        "customerId" => "21074361",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 18.25",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1005",
        "purchase" => "2016/07/17",
        "customerId" => "23191405",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 41.59",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1006",
        "purchase" => "2017/10/30",
        "customerId" => "66435876",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 51.16",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1007",
        "purchase" => "2017/06/10",
        "customerId" => "56417057",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 76.05",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1008",
        "purchase" => "2017/02/10",
        "customerId" => "26246027",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 81.92",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1009",
        "purchase" => "2017/09/20",
        "customerId" => "48198392",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 89.37",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1010",
        "purchase" => "2017/10/02",
        "customerId" => "47030389",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 99.12",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1011",
        "purchase" => "2016/06/02",
        "customerId" => "32393930",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 17.96",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1012",
        "purchase" => "2017/04/19",
        "customerId" => "28664701",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 33.57",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1013",
        "purchase" => "2016/07/26",
        "customerId" => "24339744",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 75.48",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1014",
        "purchase" => "2017/05/09",
        "customerId" => "28286098",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 10.69",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1015",
        "purchase" => "2016/07/24",
        "customerId" => "78029178",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 9.94",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1016",
        "purchase" => "2016/01/16",
        "customerId" => "24711724",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 30.15",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1017",
        "purchase" => "2017/06/27",
        "customerId" => "47256618",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 36.05",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1018",
        "purchase" => "2017/02/08",
        "customerId" => "44236394",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 5.35",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1019",
        "purchase" => "2016/11/11",
        "customerId" => "70469165",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 47.87",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1020",
        "purchase" => "2016/02/14",
        "customerId" => "95262283",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 9.76",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1021",
        "purchase" => "2017/08/03",
        "customerId" => "11490526",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 94.36",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1022",
        "purchase" => "2016/09/09",
        "customerId" => "78769813",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 72.68",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1023",
        "purchase" => "2016/06/27",
        "customerId" => "26761613",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 47.26",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1024",
        "purchase" => "2017/12/04",
        "customerId" => "59154838",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 31.49",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1025",
        "purchase" => "2016/03/12",
        "customerId" => "63792106",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 79.40",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1026",
        "purchase" => "2017/01/01",
        "customerId" => "85637003",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 90.81",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1027",
        "purchase" => "2017/12/22",
        "customerId" => "95227685",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 73.66",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1028",
        "purchase" => "2017/01/17",
        "customerId" => "53058657",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 48.62",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1029",
        "purchase" => "2017/01/10",
        "customerId" => "40949012",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 42.07",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1030",
        "purchase" => "2017/01/04",
        "customerId" => "61052495",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 10.20",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1031",
        "purchase" => "2017/06/13",
        "customerId" => "21625782",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 96.76",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1032",
        "purchase" => "2016/12/29",
        "customerId" => "10548035",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 14.09",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1033",
        "purchase" => "2017/05/29",
        "customerId" => "34849733",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 89.05",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1034",
        "purchase" => "2016/11/23",
        "customerId" => "11592141",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 20.40",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1035",
        "purchase" => "2017/05/19",
        "customerId" => "39540810",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 83.94",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1036",
        "purchase" => "2016/05/29",
        "customerId" => "13552668",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 93.48",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1037",
        "purchase" => "2017/05/16",
        "customerId" => "95968567",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 50.79",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1038",
        "purchase" => "2017/12/12",
        "customerId" => "79497853",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 10.93",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1039",
        "purchase" => "2017/03/13",
        "customerId" => "88270204",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 44.66",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1040",
        "purchase" => "2017/06/11",
        "customerId" => "75938492",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 58.39",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1041",
        "purchase" => "2017/09/26",
        "customerId" => "58783545",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 98.55",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1042",
        "purchase" => "2016/06/12",
        "customerId" => "72540301",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 95.88",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1043",
        "purchase" => "2016/04/16",
        "customerId" => "99254118",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 66.71",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1044",
        "purchase" => "2017/05/09",
        "customerId" => "72829773",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 81.29",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1045",
        "purchase" => "2016/08/02",
        "customerId" => "94756713",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 15.45",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1046",
        "purchase" => "2017/04/15",
        "customerId" => "76887805",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 2.39",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1047",
        "purchase" => "2017/02/28",
        "customerId" => "21555842",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 6.14",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1048",
        "purchase" => "2017/06/05",
        "customerId" => "26138287",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 67.41",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1049",
        "purchase" => "2016/09/18",
        "customerId" => "64090708",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 88.69",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1050",
        "purchase" => "2017/05/03",
        "customerId" => "21810768",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 85.89",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1051",
        "purchase" => "2017/04/25",
        "customerId" => "65936709",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 98.37",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1052",
        "purchase" => "2016/07/06",
        "customerId" => "43067991",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 50.50",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1053",
        "purchase" => "2017/01/18",
        "customerId" => "88696393",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 6.39",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1054",
        "purchase" => "2017/08/08",
        "customerId" => "12569204",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 23.82",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1055",
        "purchase" => "2017/03/03",
        "customerId" => "75134918",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 52.61",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1056",
        "purchase" => "2017/12/26",
        "customerId" => "77728213",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 1.56",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1057",
        "purchase" => "2017/12/29",
        "customerId" => "58590261",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 93.53",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1058",
        "purchase" => "2017/09/29",
        "customerId" => "19398154",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 95.51",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1059",
        "purchase" => "2016/03/22",
        "customerId" => "99278549",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 27.99",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1060",
        "purchase" => "2017/01/15",
        "customerId" => "38685976",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 44.78",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1061",
        "purchase" => "2016/11/13",
        "customerId" => "10127436",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 3.95",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1062",
        "purchase" => "2017/12/04",
        "customerId" => "78754438",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 27.84",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1063",
        "purchase" => "2017/04/03",
        "customerId" => "94286271",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 26.65",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1064",
        "purchase" => "2016/01/02",
        "customerId" => "59459362",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 58.71",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1065",
        "purchase" => "2017/02/03",
        "customerId" => "14343248",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 0.84",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1066",
        "purchase" => "2016/01/21",
        "customerId" => "49750939",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 84.93",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1067",
        "purchase" => "2017/09/14",
        "customerId" => "88465280",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 98.61",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1068",
        "purchase" => "2016/06/20",
        "customerId" => "71728484",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 95.19",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1069",
        "purchase" => "2016/12/11",
        "customerId" => "56198697",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 13.19",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1070",
        "purchase" => "2017/08/31",
        "customerId" => "90931920",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 6.74",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1071",
        "purchase" => "2017/06/27",
        "customerId" => "72350919",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 66.48",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1072",
        "purchase" => "2016/09/08",
        "customerId" => "32381858",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 2.11",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1073",
        "purchase" => "2016/10/06",
        "customerId" => "76811805",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 77.71",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1074",
        "purchase" => "2016/10/11",
        "customerId" => "77829131",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 82.91",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1075",
        "purchase" => "2017/04/05",
        "customerId" => "12041972",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 72.04",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1076",
        "purchase" => "2017/06/12",
        "customerId" => "30877123",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 53.24",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1077",
        "purchase" => "2017/11/04",
        "customerId" => "43593436",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 53.56",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1078",
        "purchase" => "2017/05/15",
        "customerId" => "20058100",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 32.81",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1079",
        "purchase" => "2016/03/03",
        "customerId" => "21714333",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 71.36",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1080",
        "purchase" => "2017/11/30",
        "customerId" => "41633361",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 13.18",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1081",
        "purchase" => "2016/10/13",
        "customerId" => "95810569",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 31.18",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1082",
        "purchase" => "2016/12/09",
        "customerId" => "89815803",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 37.92",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1083",
        "purchase" => "2016/12/03",
        "customerId" => "34233038",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 17.91",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1084",
        "purchase" => "2017/02/06",
        "customerId" => "50358606",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 42.78",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1085",
        "purchase" => "2017/07/02",
        "customerId" => "84761898",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 99.08",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1086",
        "purchase" => "2016/10/22",
        "customerId" => "91856954",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 15.80",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1087",
        "purchase" => "2016/06/16",
        "customerId" => "69184477",
        "tipoLinea" => "Renovacion",
        "servicio" => "Prepago",
        "planes" => "169.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-success\">En envío</span>",
        "basePrice" => "S/. 69.47",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1088",
        "purchase" => "2017/07/28",
        "customerId" => "36230547",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 3.31",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1089",
        "purchase" => "2017/10/11",
        "customerId" => "79919699",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 75.86",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1090",
        "purchase" => "2016/05/14",
        "customerId" => "93663250",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 8.20",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1091",
        "purchase" => "2017/02/15",
        "customerId" => "44280227",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 36.37",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1092",
        "purchase" => "2017/06/20",
        "customerId" => "41927013",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 55.43",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1093",
        "purchase" => "2017/03/01",
        "customerId" => "31831841",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 98.69",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1094",
        "purchase" => "2016/04/07",
        "customerId" => "61264497",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-danger\">Rechazado</span>",
        "basePrice" => "S/. 15.68",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1095",
        "purchase" => "2016/02/09",
        "customerId" => "24458623",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9",
        "sucursales" => "Lima 8",
        "status" => "<span class=\"center-block padding-5 label label-default\">Cancelado</span>",
        "basePrice" => "S/. 77.01",
        "evaluacion" => "Rechazado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1096",
        "purchase" => "2016/03/24",
        "customerId" => "10758436",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "89.9",
        "sucursales" => "Lima 4",
        "status" => "<span class=\"center-block padding-5 label label-success\">Completado</span>",
        "basePrice" => "S/. 34.84",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1097",
        "purchase" => "2017/07/08",
        "customerId" => "57952538",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 77.18",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1098",
        "purchase" => "2017/06/09",
        "customerId" => "69525159",
        "tipoLinea" => "Portabilidad",
        "servicio" => "Prepago",
        "planes" => "99.9",
        "sucursales" => "Lima 12",
        "status" => "<span class=\"center-block padding-5 label label-warning\">Pendiente</span>",
        "basePrice" => "S/. 80.51",
        "evaluacion" => "Aprobado"
      ],
      [
        "verMas" => "<a href=\"#\" class=\"clic-icon\"><span class=\"fa fa-eye\"></span></a>",
        "orderId" => "#1099",
        "purchase" => "2017/01/05",
        "customerId" => "46398638",
        "tipoLinea" => "Nueva linea",
        "servicio" => "Postpago",
        "planes" => "129.9 voz",
        "sucursales" => "Lima 14",
        "status" => "<span class=\"center-block padding-5 label label-info\">No entregado</span>",
        "basePrice" => "S/. 39.52",
        "evaluacion" => "Rechazado"
      ]
    ];
    return $data;
  }
}
