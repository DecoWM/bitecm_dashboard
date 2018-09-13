import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DistritosService } from './../distritos.service';

import { NotificationService } from '../../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'distrito',
  templateUrl: './distrito.component.html',
  styles: []
})
export class DistritoComponent implements OnInit {
  subtitle: string;
  district: any = {};
  alert: any = null;
  active: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService,
    private districtService: DistritosService
  ) {}

  ngOnInit() {
      this.subtitle = 'Nueva asignación de sucursal';
    //this.active = 'tab-r1';
    //this.alert = null;
    //const district_id = this.route.snapshot.params.id;
    //if (district_id) {
      //this.subtitle = 'Nro. #' + district_id;
     // this.blockui.start('content');

        /*this.districtService.getDistrict(district_id)
        .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            this.district = data.result;
          }
          */
          /*
          this.blockui.stop('content');
        });
    } else {
      this.subtitle = 'Nueva asignación de sucursal';
    }*/
  }

  refreshDistrict() {
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
