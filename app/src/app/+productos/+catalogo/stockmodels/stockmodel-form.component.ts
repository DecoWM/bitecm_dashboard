import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'stockmodel-form',
  templateUrl: './stockmodel-form.component.html',
  styles: []
})
export class StockModelFormComponent implements OnInit, AfterViewChecked {
  @Input() stockmodel: any = {
    stock_model_id: null,
    color_id: null,
    stock_model_code: null,
    active: null
  };
  @Input() colors: any = [];
  @Output() onValidation: EventEmitter<any> = new EventEmitter();
  @ViewChild('formStockModel') formStockModel;
  formValidate: any;

  validationOptions = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    if (this.stockmodel.active === null) {
      this.stockmodel.active = false;
    }
  }

  ngAfterViewChecked() {}

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  referenceValidator(formValidate) {
    this.formValidate = formValidate;
  }
}
