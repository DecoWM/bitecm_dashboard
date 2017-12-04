import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrdenesService } from './../ordenes.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'order-detail',
  templateUrl: './detalle-orden.component.html'
})
export class DetalleOrdenComponent implements OnInit {
  order: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private ordenesService: OrdenesService
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
