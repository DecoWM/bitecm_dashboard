import { Component, OnInit, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'prepago-form',
  templateUrl: './prepago-form.component.html',
  styles: []
})
export class PrepagoFormComponent implements OnInit {
  @Input() variation: any = {};
  @Output() onValidation: EventEmitter<any> = new EventEmitter();
  @ViewChild('formPrepago') formPrepago;
  formValidate: any;

  validationOptions = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.variation.variation_allowed = this.variation.product_variation_id ? true : false;
  }

  setValidationRef(formValidate) {
    this.formValidate = formValidate;
  }
}
