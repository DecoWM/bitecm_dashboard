import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdenesService } from './../ordenes.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'order-detail',
  templateUrl: './detalle-orden.component.html'
})
export class DetalleOrdenComponent implements OnInit {
  alert: any = null;
  order: any = {};
  equipo: any = {};
  order_back: any = null;
  order_next: any = null;
  ruta = null;
  credit_status_list = [
    'Pendiente', 'Aprobada', 'Rechazada', 'Observada'
  ];
  cursor: any = null;
  filter: any = null;
  filters: any = null;
  prev: any = null;
  next: any = null;
  pos_prev: any = null;
  pos_next: any = null;
  pos_cursor: any = null;

  options = {
    columnDefs: [ {
      targets: [0, 1, 2, 3, 4, 5 , 6, 7],
      orderable: false
    } ]
  };

  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private ordenesService: OrdenesService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.alert = null;
    this.route.params.subscribe(params => {
      this.prev = null;
      this.next = null;

      const order_id = params.id;
      this.blockui.start('content');

      // valores de los filtros 
      this.filters = this.ordenesService.getTextFilters();
      console.log(this.filters);

      // numero de ordenes filtradas
      this.filter = this.ordenesService.getFilter();
      this.cursor = order_id; // this.ordenesService.getCursor();

      // determino la posicion del order_id actual
      this.pos_cursor = this.filter.indexOf(order_id);
      console.log('ordenes:' + this.filter);

      // detectar las posiciones en base a la posicion del order_id
      this.pos_prev = this.pos_cursor - 1;
      this.pos_next = this.pos_cursor + 1;

      if (this.pos_prev >= 0) {
        this.prev = this.filter[this.pos_prev];
      }

      if (this.pos_next <= this.filter.length) {
        this.next = this.filter[this.pos_next];
      }

      // this.prev = 1;
      console.log('prev:' + this.prev);
      console.log('next:' + this.next);

      this.ordenesService.getOrden(order_id)
        .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            this.order = data.result;
            this.order.items.forEach((item, ix) => {
              if (item.product_variation_id) {
                this.equipo = item;
              }
            });
          }
          this.blockui.stop('content');
        });
    });
  }

  statusHistory(): void {
    if (this.order.order_id) {
      this.router.navigate(['status'], {relativeTo: this.route});
    }
  }

  showPopupCreditStatus(credit_status): void {
    if (this.order.credit_status === credit_status) {
      return;
    }
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar <span class="txt-color-orangeDark"><strong>Evaluación Crediticia</strong></span>',
      content : '¿Seguro que quieres actualizar el estado de la evaluación crediticia?',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.updateCreditStatus(credit_status);
      }
    });
  }

  updateCreditStatus(credit_status): void {
    if (this.order.credit_status === credit_status) {
      return;
    }
    this.blockui.start('content');
    const old_cred_stat = this.order.credit_status;
    this.order.credit_status = credit_status;
    this.ordenesService.updateOrden(this.order)
      .subscribe((data: any) => {
        console.log(data);
        if (data.success) {
          console.log(data.result);
        } else {
          this.order.credit_status = old_cred_stat;
        }
        this.blockui.stop('content');
      });
  }

  showPopupColor(order_item_id, stock_model_id): void {
    if (this._getItem(order_item_id).stock_model_id === stock_model_id) {
      return;
    }
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar <span class="txt-color-orangeDark"><strong>Color</strong></span>',
      content : '¿Seguro que quieres actualizar el color de este producto? Se actualizará también el stock model code.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.updateStockModel(order_item_id, stock_model_id);
      }
    });
  }

  showPopupStockModel(order_item_id, stock_model_id): void {
    if (this._getItem(order_item_id).stock_model_id === stock_model_id) {
      return;
    }
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar <span class="txt-color-orangeDark"><strong>Stock Model Code</strong></span>',
      content : '¿Seguro que quieres actualizar el stock model code de este producto? Se actualizará también el color.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.updateStockModel(order_item_id, stock_model_id);
      }
    });
  }

  updateStockModel(order_item_id, stock_model_id): void {
    const item = this._getItem(order_item_id);
    if (item.stock_model_id === stock_model_id) {
      return;
    }
    this.blockui.start('content');
    const params = {
      'order_item_id': order_item_id,
      'stock_model_id': stock_model_id
    }
    this.ordenesService.updateItem(this.order.order_id, params)
      .subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.ordenesService.getOrden(this.order.order_id)
            .subscribe((data: any) => {
              console.log(data);
              if (data.success) {
                this.order = data.result;
              }
              this.blockui.stop('content');
            });
        } else {
          this.blockui.stop('content');
        }
      });
  }

  removeProduct(product_id): void {
    console.log(product_id);
  }

  editOrder(): void {
    console.log(this.order);
  }

  _getItem(order_item_id): any {
    for (let i = 0; i < this.order.items.length; i++) {
      if (this.order.items[i].order_item_id === order_item_id) {
        return this.order.items[i];
      }
    }
    return null;
  }

  orderBack(): void {
    this.router.navigate([this.prev], {relativeTo: this.route.parent });
    this.alert = '';
  }

  orderNext(): void{
    this.router.navigate([this.next], {relativeTo: this.route.parent });
    this.alert ='';
  }

  cmdBackOrders(){
    this.router.navigate(['/ventas/ordenes']);
  }

  showPopupStore(store, $order_id, event): void {
    var idStore = event.target.value;
    //console.log(store);
    if(idStore != ""){
      var indexStore = store.findIndex(buscar => buscar['store_id'] == idStore);
      var storeName = store[indexStore]['store_name']; 
      this.notificationService.smartMessageBox({
        title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Grabar 
          <span class="txt-color-orangeDark">
            <strong>` + storeName + `</strong>
          </span>`,
        content : '¿Seguro que quieres actualizar la tienda en la orden?.',
        buttons : '[No][Si]'
      }, (ButtonPressed) => {
        if (ButtonPressed === 'Si') {
          this.grabarTienda(store, $order_id, event);
        }
      });
    }
    else{
      let mode, title, message = '';
      mode = 'danger';
      title = 'Actualización fallida';
      message = 'Seleccione una tienda!.';
      this.alert = { 'title': title, 'message': message, 'mode': mode }
    }
  }

  grabarTienda(store, $order_id, event){
    const store_id = event.target.value;
    var indexStore = store.findIndex(buscar => buscar['store_id'] == store_id);
    var storeName = store[indexStore]['store_name']; 

    console.log(store_id);
    console.log($order_id);

    this.ordenesService.saveStore($order_id, store_id)
      .subscribe((data: any) => {
        console.log(data);
        if (data.success) {
          console.log(data.result);
          console.log("registro en base de datos");
          this.alert = this.getAlert(data, storeName, 'Actualización', 'actualizada');
        } 
        else {
          console.log("Error");
          this.alert = this.getAlert(data, storeName, 'Actualización', 'actualizada');
        }
        this.blockui.stop('content');
      }); 
  }

  getAlert(result, storeName, title_mode, desc_mode): any {
    let mode, title, message = '';
    console.log(result.success);
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = 'La Tienda ' + storeName + ' ha sido ' + desc_mode + " en la orden ";
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = 'La Tienda ' + storeName + ' no pudo ser ' + desc_mode + " en la orden ";
    }
    console.log(message);
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  /*
  orderBack(order_back: any): void {
    this.router.navigate([order_back], {relativeTo: this.route.parent });
  }

  orderNext(order_next: any): void{
    this.router.navigate([order_next], {relativeTo: this.route.parent });
  }
  */

}
