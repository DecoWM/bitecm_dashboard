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
  selector: 'postpago-affiliations',
  templateUrl: './postpago-affiliations.component.html',
  styles: []
})
export class PostpagoAffiliationsComponent implements OnInit {
  affiliations: any = [];
  active: any = null;

  @Input() contract_id: any = null;
  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private variationService: VariationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.active = 'tab-r0';
    this.variationService.getAffiliations()
      .subscribe((data: any) => {
      if (data.success) {
        this.affiliations = data.result;
      }
    });
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }
}
