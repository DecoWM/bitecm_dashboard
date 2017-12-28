import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './product.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styles: []
})
export class CatalogoComponent implements OnInit {
  ngOnInit() {
  }
}
