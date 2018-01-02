import { Component, OnInit, Type, Input, ViewChild } from '@angular/core';
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
  @ViewChild('formBasic') formBasic;
  @ViewChild('productImageInput') productImageInput;

  validationOptions = {
    rules: {
      category_id : {
        required : true
      }
    },
    messages : {
      category_id : {
        required : 'Debes seleccionar una categoría.'
      },
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
    console.log(e);
    this.save(e);
  }

  save(e) {
    const fileBrowser = this.productImageInput.nativeElement;
    const formData = new FormData(document.forms.namedItem('form-basic'));
    if (this.product.product_id) {
      this.productService.updateBasic(this.product.product_id, formData)
        .subscribe((data: any) => {
          if (data.success) {
            this.product = data.result;
          }
        });
    } else {
      this.productService.saveBasic(formData)
        .subscribe((data: any) => {
          if (data.success) {
            // this.product = data.result;
            console.log(data.result);
          }
        });
    }
  }

  buildFormData(data: any) {

  }
}
