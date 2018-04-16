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
    product_variation_id: '',
    variation_type_id: '',
    product_id: '',
    affiliation_id: '',
    contract_id: '',
    product_image_url: '',
    product_data_sheet: '',
    plan_id: '',
    plan_type: '',
    plan_name: '',
    plan_price: '',
    plan_datacap: '',
    plan_unlimited_calls: '',
    plan_unlimited_rpb: '',
    plan_unlimited_sms: '',
    plan_unlimited_whatsapp: '',
    plan_free_facebook: '',
    active: '',
    vende_en_chip: '',
    disponible_en_chip: ''
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

 // this.productService.getAffiliationsPlan(product_id)
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
      this.subtitle = 'Nuevo plan';
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
    if (!alert) {
      alert = [];
    }
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
