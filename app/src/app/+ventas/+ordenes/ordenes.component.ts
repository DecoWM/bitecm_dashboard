import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { OrdenesService } from './ordenes.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'ordenes',
  templateUrl: './ordenes.component.html',
  styles: []
})
export class OrdenesComponent implements OnInit {
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  loadingStatus: string;

  options = {
    dom: 'Bfrtip',
    columnDefs: [ {
      targets: [0, 8],
      orderable: false
    } ],
    order: [[7, 'desc']],
    colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private ordenesService: OrdenesService
  ) {
    this.loadingStatus = 'Cargando datos...';
  }

  ngOnInit() {
    this.blockui.start('content');
    this.ordenesService.getOrdenes()
      .subscribe((data: any) => {
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

  Detalle(data: any): void {
    this.router.navigate(['detalle', data._id], {relativeTo: this.route});
  }

}
