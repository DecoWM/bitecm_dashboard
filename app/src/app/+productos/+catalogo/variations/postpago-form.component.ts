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
    product_package: null,
    promo_price: null,
    promo_discount: null
  };
  @Input() plan_id: any = null;
  @ViewChild('formPostpago') formPostpago;
  formValidate: any;

  validationOptions = {
    rules: {
      product_variation_price : {
        required : true,
        number: true
      },
      promo_price: {
        number: true
      },
      promo_discount_calc: {
        number: true
      }
    },
    messages : {
      product_variation_price : {
        required : 'Debes ingresar un precio para la variación',
        number: 'Debes colocar un número'
      },
      promo_price: {
        number: 'Debes colocar un número'
      },
      promo_discount_calc: {
        number: 'Debes colocar un número'
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
    if (typeof this.variation.promo_discount_calc === 'undefined' && this.variation.promo_discount) {
      this.variation.promo_discount_calc = (parseFloat(this.variation.promo_discount) * 100).toFixed(2);
    }

    if (typeof this.variation.variation_allowed === 'undefined') {
      this.variation.variation_allowed = this.variation.product_variation_id && this.variation.active ? true : false;
    }
  }

  setValidationRef(formValidate) {
    this.formValidate = formValidate;
  }

  calcDiscount() {
    if (this.variation.promo_price.toString().length > 0 &&
      parseFloat(this.variation.promo_price) &&
      parseFloat(this.variation.promo_price) !== 0) {
      this.variation.promo_discount = (1 - (parseFloat(this.variation.promo_price) / parseFloat(this.variation.product_variation_price))).toFixed(4);
      this.variation.promo_discount_calc = (parseFloat(this.variation.promo_discount) * 100).toFixed(2);
    } else {
      this.variation.promo_discount = null;
      this.variation.promo_discount_calc = null;
    }
  }

  calcPrice() {
    if (typeof this.variation.promo_discount_calc !== 'undefined' &&
      this.variation.promo_discount_calc.toString().length > 0 &&
      parseFloat(this.variation.promo_discount_calc) &&
      parseFloat(this.variation.promo_discount_calc) !== 0) {
      this.variation.promo_discount = (parseFloat(this.variation.promo_discount_calc) / 100).toFixed(4);
      this.variation.promo_price = (parseFloat(this.variation.product_variation_price) * (1 - parseFloat(this.variation.promo_discount))).toFixed(2);
    } else {
      this.variation.promo_discount = null;
      this.variation.promo_price = null;
    }
  }
}
