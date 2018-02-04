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
  @Output() onAddColor: EventEmitter<any> = new EventEmitter();
  @ViewChild('formStockModel') formStockModel;
  formValidate: any;
  productImageUrl: any = [];
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
    if (!this.stockmodel.color_id) {
      this.stockmodel.color_id = '';
    }
    this.productImageUrl = [];
    if (this.stockmodel.active === null) {
      this.stockmodel.active = false;
    }
    if (this.stockmodel.stock_model_id) {
      this.stockmodel.product_images.map((i, x) => {
        const img_url = i.product_image_url;
        const img_url_arr = img_url.split('/');
        i.product_image_name = img_url_arr[img_url_arr.length - 1];
        return i;
      });
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

  changeFilename(event, ix) {
    const uploadedFiles = event.target.files;
    this.productImageUrl[ix] = uploadedFiles[0].name;
  }

  addColor() {
    this.onAddColor.emit();
  }

  save(e) {
    const formData = new FormData(document.forms
      .namedItem('form-stock-model' + (this.stockmodel.stock_model_id ? this.stockmodel.stock_model_id : '')));
    if (this.formStockModel.dirty || (formData.has('product_images[]') && this.productImageUrl.length)) {
      this.blockui.start('content');
      if (!this.productImageUrl.length) {
        formData.delete('product_images[]');
      }
      if (this.stockmodel.stock_model_id) {
        formData.append('stock_model_images', JSON.stringify(this.stockmodel.product_images));
        formData.set('active', this.stockmodel.active ? '1' : '0');
        this.stockModelService.updateStockModel(this.product_id, formData, this.stockmodel.stock_model_id)
          .subscribe((data: any) => {
            if (data.success) {
              this.productImageUrl = [];
              this.stockModelService.getStockModel(this.product_id, this.stockmodel.stock_model_id)
                .subscribe((smc: any) => {
                  if (smc.success) {
                    this.stockmodel = smc.result;
                    this.stockmodel.product_images.map((i, x) => {
                      const img_url = i.product_image_url;
                      const img_url_arr = img_url.split('/');
                      i.product_image_name = img_url_arr[img_url_arr.length - 1];
                      i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                      return i;
                    });
                  }
                  this.blockui.stop('content');
                });
            } else {
              this.blockui.stop('content');
            }
            this.onAlert.emit(this.getAlert(data));
          });
      } else {
        this.stockModelService.saveStockModel(this.product_id, formData)
          .subscribe((data: any) => {
            if (data.success) {
              this.productImageUrl = [];
              this.stockModelService.getStockModel(this.product_id, data.id)
                .subscribe((smc: any) => {
                  if (smc.success) {
                    this.stockmodel = smc.result;
                    this.stockmodel.product_images.map((i, x) => {
                      const img_url = i.product_image_url;
                      const img_url_arr = img_url.split('/');
                      i.product_image_name = img_url_arr[img_url_arr.length - 1];
                      i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                      return i;
                    });
                  }
                  this.blockui.stop('content');
                });
            } else {
              this.blockui.stop('content');
            }
            this.onAlert.emit(this.getAlert(data));
          });
      }
    }
  }

  removeImage(product_image) {
    this.blockui.start('content');
    this.stockModelService.removeProductImage(product_image.product_image_id)
      .subscribe((data: any) => {
        this.onAlert.emit(this.getAlert(data));
        if (data.success) {
          for (let key in this.stockmodel.product_images) {
            if (this.stockmodel.product_images[key].product_image_id === product_image.product_image_id) {
              this.stockmodel.product_images.splice(key, 1);
            }
          }
          this.blockui.stop('content');
        }
      });
  }

  showPopupRemoveImage(product_image): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Eliminar imagen
        <span class="txt-color-orangeDark">
          <strong>${product_image.product_image_name}</strong>
        </span>`,
      content : '¿Seguro que quieres eliminar esta imagen? Desparecerá del detalle del producto.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.removeImage(product_image);
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
