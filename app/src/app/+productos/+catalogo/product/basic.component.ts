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
  selector: 'product-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class ProductBasicComponent implements OnInit, AfterViewChecked {
  categories: any = [];
  brands: any = [];
  productImageUrl = '';

  @Input() product: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;
  @ViewChild('productImageInput') productImageInput;

  validationOptions = {
    rules: {
      category_id : {
        required : true
      },
      brand_id : {
        required : true
      },
      product_model : {
        required : true
      },
      product_price : {
        required : true,
        number: true
        // pattern: /\d+(\.\d{1,2})?/
      },
      product_priority : {
        required : true,
        number: true,
        maxlength: 3
      }
    },
    messages : {
      category_id : {
        required : 'Debes seleccionar una categoría.'
      },
      brand_id : {
        required : 'Debes seleccionar una marca'
      },
      product_model : {
        required : 'Debes ingresar un modelo'
      },
      product_price : {
        required : 'Debes ingresar un precio',
        number: 'Debes ingresar un número',
        pattern: 'Solo se aceptan números con 2 decimales'
      },
      product_priority : {
        required : 'Debes ingresar una prioridad',
        number: 'Debes ingresar un número',
        maxlength: 'Éste número acepta como máximo 3 dígitos'
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
    this.productImageUrl = '';
    Observable.zip(
      this.productService.getCategories(),
      this.productService.getBrands()
    ).subscribe(([cats, brands]: [any, any]) => {
      if (cats.success) {
        this.categories = cats.result;
      }
      if (brands.success) {
        this.brands = brands.result;
      }
    });
  }

  ngAfterViewChecked() {
    if (typeof this.product.category_id !== 'undefined' && this.product.category_id === null) {
      this.product.category_id = '';
    }
    if (typeof this.product.brand_id !== 'undefined' && this.product.brand_id === null) {
      this.product.brand_id = '';
    }
    if (typeof this.product.product_tag !== 'undefined' && this.product.product_tag === null) {
      this.product.product_tag = '';
    }
  }

  changeFilename(event) {
    const uploadedFiles = event.target.files;
    this.productImageUrl = uploadedFiles[0].name;
  }

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  onValidationSuccess(e) {
    this.save(e);
  }

  save(e) {
    const fileBrowser = this.productImageInput.nativeElement;
    const formData = new FormData(document.forms.namedItem('form-basic'));
    if (this.product.product_id) {
      this.productService.updateBasic(this.product.product_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.product, 'Actualización', 'actualizado'));
          if (data.success && formData.has('product_image')) {
            this.productImageUrl = '';
            this.product.product_image_url = this.product.product_image_url + '?v' + (new Date().getTime().toString());
          }
        });
    } else {
      this.productService.saveBasic(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.product, 'Creación', 'creado'));
          if (data.success) {
            this.productImageUrl = '';
            this.router.navigate([data.id], {relativeTo: this.route.parent});
          }
        });
    }
  }

  getAlert(result, product, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (!product.brand_name) {
      product.brand_name = '';
    }
    if (result.messages && result.messages.product_image) {
      message = 'Para un producto nuevo es obligatoria una imagen';
    }
    if (result.messages && result.messages.product_model) {
      message = 'El modelo ingresado ya fue tomado por otro producto';
    }
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = message.length ? message : 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido ' + desc_mode;
    } else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = message.length ? message : 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
