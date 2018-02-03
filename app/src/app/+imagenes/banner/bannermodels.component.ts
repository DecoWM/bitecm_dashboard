import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SliderModelService } from './../slidermodel.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { ModalDirective } from 'ngx-bootstrap';
import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'banner-models',
  templateUrl: './bannermodels.component.html',
  styles: []
})
export class BannerModelsComponent implements OnInit {
  bannermodels: any = [];
  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private sliderModelService: SliderModelService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.blockui.start('content');
    this.sliderModelService.getImages('BANNERS')
      .subscribe(( bannermodels: any ) => {
        if (bannermodels.success) {
          this.bannermodels = bannermodels.result;
        }
        this.blockui.stop('content');
      });
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }
}
