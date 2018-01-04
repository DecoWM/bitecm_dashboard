import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'postpago-form',
  templateUrl: './postpago-form.component.html',
  styles: []
})
export class PostpagoFormComponent implements OnInit, AfterViewChecked {
  @Input() variation: any = {
    plan_id: null,
    product_variation_id: null,
    reason_code: null,
    product_package: null
  };
  @Input() plan_id: any = null;
  @Output() onValidation: EventEmitter<any> = new EventEmitter();
  @ViewChild('formPostpago') formPostpago;
  formValidate: any;

  validationOptions = {
    rules: {
      product_variation_price : {
        required : true
      }
    },
    messages : {
      product_variation_price : {
        required : 'Debes ingresar un precio para la variación'
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  ngAfterViewChecked() {
    if (typeof this.variation.variation_allowed === 'undefined') {
      this.variation.variation_allowed = this.variation.product_variation_id && this.variation.active ? true : false;
    }
  }

  setValidationRef(formValidate) {
    this.formValidate = formValidate;
  }
}
