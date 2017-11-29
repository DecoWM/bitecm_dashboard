import { Component, OnInit, Type, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PaquetesService } from './../shared/paquetes.service';
import { DetallePaqueteComponent } from './detalle/detalle-paquete.component';

declare var $: any;

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styles: []
})
export class PaquetesComponent implements OnInit {
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  dcomp: Type<any> = DetallePaqueteComponent;

  options = {
    dom: 'Bfrtip',
    columnDefs: [ {
      targets: [0, 4],
      orderable: false
    } ],
    order: [[3, 'desc']],
    colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paquetesService: PaquetesService
  ) { }

  ngOnInit() {
    this.paquetesService.getPaquetes().subscribe((data: any) => {
      this.itemsObs.next(data.result);
    });
  }

  Editar(data: any): void {
    this.router.navigate(['editar', data._id], {relativeTo: this.route});
  }

}
