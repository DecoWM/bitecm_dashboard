import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './../product.service';
import { StockModelService } from './../stockmodel.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'stock-models',
  templateUrl: './stockmodels.component.html',
  styles: []
})
export class StockModelsComponent implements OnInit {
  ngOnInit() {
  }
}
