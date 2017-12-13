import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdenesService } from './../ordenes.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'order-detail',
  templateUrl: './detalle-orden.component.html'
})
export class DetalleOrdenComponent implements OnInit {
  order: any = {};
  credit_status_list = [
    'Pendiente', 'Aprobada', 'Rechazada', 'Observada'
  ];

  options = {
    columnDefs: [ {
      targets: [0, 1, 2, 3, 4, 5 , 6, 7],
      orderable: false
    } ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private ordenesService: OrdenesService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    const order_id = this.route.snapshot.params.id;
    this.blockui.start('content');
    this.ordenesService.getOrden(order_id)
      .subscribe((data: any) => {
        console.log(data);
        if (data.success) {
          this.order = data.result;
        }
        this.blockui.stop('content');
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
}
