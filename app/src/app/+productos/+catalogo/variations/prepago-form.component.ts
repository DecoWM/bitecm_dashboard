import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
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
export class PrepagoFormComponent implements OnInit, AfterViewChecked {
  @Input() variation: any = {
    plan_id: null,
    product_variation_id: null,
    reason_code: null,
    product_package: null,
    promo_price: null,
    promo_discount: null
  };
  @Input() plan_id: any = null;
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

  ngOnInit() {}

  ngAfterViewChecked() {
    if (typeof this.variation.variation_allowed === 'undefined') {
      this.variation.variation_allowed = this.variation.product_variation_id && this.variation.active ? true : false;
    }
  }

  setValidationRef(formValidate) {
    this.formValidate = formValidate;
  }

  calcDiscount() {
    this.variation.promo_discount = (1 - (parseFloat(this.variation.promo_price) / parseFloat(this.variation.product_variation_price))).toFixed(2);
  }

  calcPrice() {
    this.variation.promo_price = (parseFloat(this.variation.product_variation_price) * (1 - parseFloat(this.variation.promo_discount))).toFixed(2);
  }
}
