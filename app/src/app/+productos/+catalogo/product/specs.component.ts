import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './../product.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'product-specs',
  templateUrl: './specs.component.html',
  styles: []
})
export class ProductSpecsComponent implements OnInit, AfterViewChecked {
  dataSheetUrl = '';

  @Input() product: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formSpecs') formSpecs;
  @ViewChild('dataSheetInput') dataSheetInput;

  validationOptions = {
    rules: {
      product_description: {
        // required: true
      },
      product_internal_memory: {
        required: true
      },
      product_external_memory: {
        required: true
      },
      product_screen_size: {
        required: true,
        number: true,
        maxlength: 10
      },
      product_camera_1: {
        required: true,
        // number: true,
        maxlength: 10
      },
      product_camera_2: {
        required: true,
        number: true,
        maxlength: 10
      },
      product_os: {
        required: true,
        maxlength: 250
      },
      product_processor_name: {
        required: true,
        maxlength: 250
      },
      product_processor_power: {
        required: true,
        number: true,
        maxlength: 10
      },
      product_battery: {
        required: true,
        number: true,
        maxlength: 10
      },
      product_band : {
        required: true,
        maxlength : 50
      },
      product_data_sheet: {
        // required: true,
        accept: 'application/pdf'
      }
    },
    messages : {
      product_description: {
        // required: 'Este campo es obligatorio'
      },
      product_internal_memory: {
        required: 'Este campo es obligatorio'
      },
      product_external_memory: {
        required: 'Este campo es obligatorio'
      },
      product_screen_size: {
        required: 'Este campo es obligatorio',
        number: 'Debes ingresar un número',
        maxlength: 'Máximo 10 caracteres'
      },
      product_camera_1: {
        required: 'Este campo es obligatorio',
        // number: 'Debes ingresar un número',
        maxlength: 'Máximo 10 caracteres'
      },
      product_camera_2: {
        required: 'Este campo es obligatorio',
        number: 'Debes ingresar un número',
        maxlength: 'Máximo 10 caracteres'
      },
      product_os: {
        required: 'Este campo es obligatorio',
        maxlength: 'Cadena muy larga'
      },
      product_processor_name: {
        required: 'Este campo es obligatorio',
        maxlength: 'Cadena muy larga'
      },
      product_processor_power: {
        required: 'Este campo es obligatorio',
        number: 'Debes ingresar un número',
        maxlength: 'Máximo 10 caracteres'
      },
      product_battery: {
        required: 'Este campo es obligatorio',
        number: 'Debes ingresar un número',
        maxlength: 'Máximo 10 caracteres'
      },
      product_band : {
        required: 'Este campo es obligatorio',
        maxlength : 'Máximo 50 caracteres'
      },
      product_data_sheet: {
        // required: 'Este campo es obligatorio',
        accept: 'Solo se aceptan archivos PDF'
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.dataSheetUrl = '';
  }

  ngAfterViewChecked() {
    if (!this.product.product_data_sheet_name && this.product.product_data_sheet) {
      const img_url = this.product.product_data_sheet;
      const img_url_arr = img_url.split('/');
      this.product.product_data_sheet_name = img_url_arr[img_url_arr.length - 1];
    }
    if (typeof this.product.product_internal_memory !== 'undefined' && this.product.product_internal_memory === null) {
      this.product.product_internal_memory = '';
    }
    if (typeof this.product.product_external_memory !== 'undefined' && this.product.product_external_memory === null) {
      this.product.product_external_memory = '';
    }
    if (typeof this.product.product_band !== 'undefined' && this.product.product_band === null) {
      this.product.product_band = '';
    }
    if (typeof this.product.product_radio_check === 'undefined') {
      if (this.product.product_radio === 'Si') {
        this.product.product_radio_check = 1;
      } else if (this.product.product_radio === 'No') {
        this.product.product_radio_check = 0;
      } else {
        this.product.product_radio_check = 1;
      }
    }
    if (typeof this.product.product_bluetooth_check === 'undefined') {
      if (this.product.product_bluetooth === 'Si') {
        this.product.product_bluetooth_check = 1;
      } else if (this.product.product_bluetooth === 'No') {
        this.product.product_bluetooth_check = 0;
      } else {
        this.product.product_bluetooth_check = 1;
      }
    }
    if (typeof this.product.product_wlan_check === 'undefined') {
      if (this.product.product_wlan === 'Si') {
        this.product.product_wlan_check = 1;
      } else if (this.product.product_wlan === 'No') {
        this.product.product_wlan_check = 0;
      } else {
        this.product.product_wlan_check = 1;
      }
    }
    if (typeof this.product.product_gps_check === 'undefined') {
      if (this.product.product_gps === 'Si') {
        this.product.product_gps_check = 1;
      } else if (this.product.product_gps === 'No') {
        this.product.product_gps_check = 0;
      } else {
        this.product.product_gps_check = 1;
      }
    }
  }

  changeFilename(event) {
    const uploadedFiles = event.target.files;
    this.dataSheetUrl = uploadedFiles[0].name;
  }

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  onValidationSuccess(e) {
    this.save(e);
  }

  save(e) {
    const fileBrowser = this.dataSheetInput.nativeElement;
    const formData = new FormData(document.forms.namedItem('form-specs'));
    if (this.product.product_radio_check) {
      formData.append('product_radio', 'Si');
    } else {
      formData.append('product_radio', 'No');
    }
    if (this.product.product_bluetooth_check) {
      formData.append('product_bluetooth', 'Si');
    } else {
      formData.append('product_bluetooth', 'No');
    }
    if (this.product.product_wlan_check) {
      formData.append('product_wlan', 'Si');
    } else {
      formData.append('product_wlan', 'No');
    }
    if (this.product.product_gps_check) {
      formData.append('product_gps', 'Si');
    } else {
      formData.append('product_gps', 'No');
    }
    if (!this.dataSheetUrl.length) {
      formData.delete('product_data_sheet');
    }
    this.blockui.start('content');
    this.productService.updateSpecs(this.product.product_id, formData)
      .subscribe((data: any) => {
        this.dataSheetUrl = '';
        this.onAlert.emit(this.getAlert(data, this.product, 'Actualización', 'actualizado'));
        if (data.success && formData.has('product_data_sheet')) {
          this.product.product_data_sheet = this.product.product_data_sheet + '?v' + (new Date().getTime().toString());
        }
        this.blockui.stop('content');
      }, (error) => {
        this.onAlert.emit({
          'title': 'Archivo pesado',
          'message': 'El archivo de especificaciones ténicas es muy pesado, solo se permiten 10mb',
          'mode': 'danger'
        });
        this.blockui.stop('content');
      });
  }

  getAlert(result, product, title_mode, desc_mode): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido ' + desc_mode;
    } else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
