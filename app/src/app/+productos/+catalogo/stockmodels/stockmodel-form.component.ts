import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StockModelService } from './../stockmodel.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'stockmodel-form',
  templateUrl: './stockmodel-form.component.html',
  styles: []
})
export class StockModelFormComponent implements OnInit, AfterViewChecked {
  @Input() product_id: any = null;
  @Input() stockmodel: any = {
    stock_model_id: null,
    color_id: '',
    stock_model_code: null,
    active: null
  };
  @Input() colors: any = [];
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('formStockModel') formStockModel;
  formValidate: any;
  _addImages = 5;

  validationOptions = {
    rules: {
      color_id : {
        required : true
      },
      stock_model_code : {
        required : true
      }
    },
    messages : {
      color_id : {
        required : 'Debes seleccionar un color'
      },
      stock_model_code : {
        required : 'Debes ingresar un stock model code'
      }
    }
  };

  public get allowedImages(): Array<Number> {
    let limit = this._addImages;
    if (this.stockmodel.product_images) {
      limit = limit - this.stockmodel.product_images.length;
    }
    const foo = [];
    for (let i = 1; i <= limit; i++) {
       foo.push(i);
    }
    return foo;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private stockModelService: StockModelService,
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

  onValidationSuccess(e) {
    this.save(e);
  }

  referenceValidator(formValidate) {
    this.formValidate = formValidate;
  }

  save(e) {
    if (this.formStockModel.dirty && this.formValidate.valid()) {
      if (this.stockmodel.stock_model_id) {
        const formData = new FormData(document.forms.namedItem('form-stock-model' + this.stockmodel.stock_model_id));
        formData.append('stock_model_images', JSON.stringify(this.stockmodel.product_images));
        this.stockModelService.updateStockModel(this.product_id, formData, this.stockmodel.stock_model_id)
          .subscribe((data: any) => {
            this.onAlert.emit(this.getAlert(data));
            if (data.success) {
              this.stockmodel.stock_model_id = data.id;
            }
          });
      } else {
        const formData = new FormData(document.forms.namedItem('form-stock-model'));
        this.stockModelService.saveStockModel(this.product_id, this.stockmodel)
          .subscribe((data: any) => {
            this.onAlert.emit(this.getAlert(data));
            if (data.success) {
              this.stockmodel.stock_model_id = data.id;
            }
          });
      }
    }
  }

  removeImage(product_image) {
    this.stockModelService.removeProductImage(product_image.product_image_id)
      .subscribe((data: any) => {
        this.onAlert.emit(this.getAlert(data));
        if (data.success) {
          // this.stockmodel.stock_model_id = data.id;
        }
      });
  }

  getAlert(result): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Éxito!';
      message = result.result;
    } else {
      mode = 'danger';
      title = 'Error';
      message = result.result;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
