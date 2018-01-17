import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './../product.service';

import { NotificationService } from '../../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  subtitle: string;
  product: any = {
    category_id: '',
    brand_id: '',
    product_tag: '',
    product_internal_memory: '',
    product_external_memory: '',
    product_band: ''
  };
  alert: any = null;
  active: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.active = 'tab-r1';
    this.alert = null;
    const product_id = this.route.snapshot.params.id;
    if (product_id) {
      this.subtitle = 'Nro. #' + product_id;
      this.blockui.start('content');
      this.productService.getProduct(product_id)
        .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            this.product = data.result;
          }
          this.blockui.stop('content');
        });
    } else {
      this.subtitle = 'Nuevo producto';
    }
  }

  refreshProduct() {
    /*this.productService.getProduct(this.product.product_id)
      .subscribe((data: any) => {
        if (data.success) {
          this.product = data.result;
        }
      });*/
  }

  printAlert(alert): void {
    if (alert && !(alert instanceof Array)) {
      alert = [alert];
    }
    alert.map((item, ix) => {
      switch (item.mode) {
        case 'success':
          item.icon = 'check';
          item.color = '#8ac38b';
        break;
        case 'danger':
          item.icon = 'warning';
          item.color = '#c46a69';
        break;
      }
      return item;
    });
    this.alert = alert;
    this.alert.forEach((item, ix) => {
      this.notificationService.smallBox({
        title: item.title,
        content: item.message,
        color: item.color,
        iconSmall: 'fa-fw fa fa-' + item.icon + ' bounce animated',
        timeout: 4000
      });
    })
  }
}
