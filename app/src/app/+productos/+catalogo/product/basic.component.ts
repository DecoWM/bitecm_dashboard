import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './../product.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'product-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class ProductBasicComponent implements OnInit {
  categories: any = [];
  brands: any = [];
  @Input() product: any = {};
  productImageUrl = '';

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

  changeFile(event) {
    const uploadedFiles = event.srcElement.files;
    this.productImageUrl = uploadedFiles[0].name;
  }

  
}
