import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  subtitle: string;

  ngOnInit() {
    this.subtitle = 'Nuevo producto'; // 'Nro. #' + product.product_id;
  }
}
