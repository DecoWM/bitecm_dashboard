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
  @Input() product: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.productService.getCategories()
      .subscribe((data: any) => {
        console.log(data);
        if (data.success) {
          this.categories = data.result;
        }
      });
  }
}
