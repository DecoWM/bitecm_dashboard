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
  selector: 'slider-models',
  templateUrl: './slidermodels.component.html',
  styles: []
})
export class SliderModelsComponent implements OnInit {
  slidermodels: any = [];
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
    this.sliderModelService.getImages('SLIDER').subscribe(( slidermodels: any ) => {
      if (slidermodels.success) {
        this.slidermodels = slidermodels.result;
      }
      this.blockui.stop('content');
    });
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }
}
