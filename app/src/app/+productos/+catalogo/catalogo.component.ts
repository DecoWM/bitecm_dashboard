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
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();

  options = {
    dom: 'Bfrtip',
    pageLength: 25,
    /*columnDefs: [ {
      targets: [0, 8],
      orderable: false
    } ],*/
    order: [[5, 'desc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private productService: ProductService
  ) {
    this.loadingStatus = 'Cargando productos...';
  }

  ngOnInit() {
    this.blockui.start('content');
    this.productService.getProductos()
      .subscribe((data: any) => {
        console.log(data);
        this.blockui.stop('content');
        const items = data.result;
        this.itemsObs.next(items);
        if (items.length === 0) {
          this.loadingStatus = 'No se encontraron registros';
        }
      }, (error) => {
        this.blockui.stop('content');
        if (error.status === 401) {
        // this.authService.logout(true);
        }
      });
  }
}
