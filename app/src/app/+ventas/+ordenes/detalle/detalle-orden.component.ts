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

  showPopupCreditStatus(credit_status) {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar Evaluación Crediticia<span class="txt-color-orangeDark"><strong></strong></span>',
      content : '¿Seguro que quieres actualizar el estado de la evaluación crediticia?',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.updateCreditStatus(credit_status);
      }
    });
  }

  updateCreditStatus(credit_status): void {
    console.log(credit_status);
  }

  editStockModel(stock_model_id: any): void {
    console.log(stock_model_id);
  }

  removeProduct(product_id: any): void {
    console.log(product_id);
  }

  editOrder(): void {
    console.log(this.order);
  }
}
