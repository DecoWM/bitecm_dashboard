import { Component, OnInit, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
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
export class ProductBasicComponent implements OnInit {
  categories: any = [];
  brands: any = [];
  productImageUrl = '';

  @Input() product: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
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
        required : true
      },
      product_priority : {
        required : true,
        number: true,
        maxlength: 3,
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
        required : 'Debes ingresar un precio'
      },
      product_priority : {
        required : 'Debes ingresar una prioridad',
        number: 'Debes ingresar un número entero',
        maxlength: 'Éste número acepta como máximo 3 dígitos',
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

  changeFilename(event) {
    const uploadedFiles = event.srcElement.files;
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
        });
    } else {
      this.productService.saveBasic(formData)
        .subscribe((data: any) => {
          // this.onAlert.emit(this.getAlert(data, this.product, 'Creación', 'creado'));
          if (data.success) {
            this.router.navigate([data.id], {relativeTo: this.route.parent});
          }
        });
    }
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
