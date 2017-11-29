import { Component, OnInit, Type, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ActividadesService } from './../shared/actividades.service';
import { ItinerariosService } from './../shared/itinerarios.service';
import { DetalleActividadComponent } from './detalle/detalle-actividad.component';

declare var $: any;

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styles: []
})
export class ActividadesComponent implements OnInit {
  itinerario = {};
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  dcomp: Type<any> = DetalleActividadComponent;

  options = {
    dom: 'Bfrtip',
    columnDefs: [ {
      targets: [0, 8],
      orderable: false
    } ],
    order: [[0, 'asc'], [2, 'asc']],
    colReorder: true
  };
  topBreadCrumb = ['Actividades', ''];

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private itinerariosService: ItinerariosService,
    private actividadesService: ActividadesService
  ) { }

  ngOnInit() {
    const itinerarioId = this.route.snapshot.paramMap.get('itinerario_id');
    Observable.zip(
      this.itinerariosService.getItinerario(itinerarioId, true),
      this.actividadesService.getActividades(itinerarioId)
    ).subscribe(([data_itinerario, data_actividades]: [any, any]) => {
      this.itinerario = data_itinerario.result;
      this.itemsObs.next(data_actividades.result);
      this.topBreadCrumb[1] = data_itinerario.result.paquete.titulo[0];
    });
  }

  Editar(data: any): void {
    this.router.navigate(['editar', data._id], {relativeTo: this.route});
  }

}
