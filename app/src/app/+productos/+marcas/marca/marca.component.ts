import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MarcasService } from './../marcas.service';

import { NotificationService } from '../../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'marca',
  templateUrl: './marca.component.html',
  styles: []
})
export class MarcaComponent implements OnInit {
  subtitle: string;
  brand: any = {};
  alert: any = null;
  active: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService,
    private brandService: MarcasService
  ) {}

  ngOnInit() {
    //this.active = 'tab-r1';
    this.alert = null;
    const brand_id = this.route.snapshot.params.id;
    if (brand_id) {
      this.subtitle = 'Nro. #' + brand_id;
      this.blockui.start('content');
      this.brandService.getBrand(brand_id)
        .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            this.brand = data.result;
          }
          this.blockui.stop('content');
        });
    } else {
      this.subtitle = 'Nueva marca';
    }
  }

  refreshBrand() {
    /*this.planService.getProduct(this.product.product_id)
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
