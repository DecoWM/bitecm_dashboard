import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ChipService } from './chip.service';
import { ProductService } from '../+catalogo/product.service';

import { NotificationService } from '../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styles: []
})
export class ChipComponent implements OnInit {
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
    private chipService: ChipService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.active = 'tab-r2';
    this.alert = null;
    this.blockui.start('content');
    this.chipService.getChip()
      .subscribe((data: any) => {
        console.log(data);
        if (data.success) {
          this.productService.setProductId(data.result.product_id);
          this.product = data.result;
        }
        this.blockui.stop('content');
      });
  }

  refreshProduct() {}

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
