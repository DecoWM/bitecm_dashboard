import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { VariationService } from './../variation.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'postpago-variations',
  templateUrl: './postpago.component.html',
  styles: []
})
export class PostpagoVariationsComponent implements OnInit {
  contracts: any = [];
  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private variationService: VariationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.variationService.getContracts()
      .subscribe((data: any) => {
      if (data.success) {
        this.contracts = data.result;
      }
    });
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }
}
