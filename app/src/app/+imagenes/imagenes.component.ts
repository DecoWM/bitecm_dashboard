import { Component, OnInit, Type, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotificationService } from '../shared/utils/notification.service';
import { ImagenesService } from './imagenes.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'imagenes',
  templateUrl: './imagenes.component.html',
  styles: []
})
export class ImagenesComponent implements OnInit {
  alert: any = null;
  active: any = null;
  sliders: any = [];
  home_images: any = [];
  banners: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService,
    private imagenesService: ImagenesService
  ) {}

  ngOnInit() {
    this.alert = null;
    this.active = 'tab-r1';
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
