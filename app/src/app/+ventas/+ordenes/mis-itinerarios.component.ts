import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ItinerariosService } from './../shared/itinerarios.service';
import { DetalleItinerarioComponent } from './detalle/detalle-itinerario.component';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'mis-itinerarios',
  templateUrl: './mis-itinerarios.component.html',
  styles: []
})
export class MisItinerariosComponent implements OnInit {
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  dcomp: Type<any> = DetalleItinerarioComponent;
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
    private itinerariosService: ItinerariosService,
    private blockui: BlockUIService
  ) {
    this.loadingStatus = 'Cargando datos...';
  }

  ngOnInit() {
    this.blockui.start('content');
    this.itinerariosService.getItinerarios()
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

  Editar(data: any): void {
    this.router.navigate(['editar', data._id], {relativeTo: this.route});
  }

}
