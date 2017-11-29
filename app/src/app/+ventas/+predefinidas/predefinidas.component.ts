import { Component, OnInit, Type, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DetallePredefinidaComponent } from './detalle/detalle-predefinida.component';
import { PredefinidasService } from './../shared/predefinidas.service';

declare var $: any;

@Component({
  selector: 'predefinidas',
  templateUrl: './predefinidas.component.html',
  styles: []
})
export class PredefinidasComponent implements OnInit {
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  dcomp: Type<any> = DetallePredefinidaComponent;

  options = {
    dom: 'Bfrtip',
    columnDefs: [ {
      targets: [0, 7],
      orderable: false
    } ],
    order: [[6, 'desc']],
    colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private predefinidasService: PredefinidasService
  ) { }

  ngOnInit() {
    this.predefinidasService.getPredefinidas()
      .subscribe((data: any) => {
        this.itemsObs.next(data.result)
      });
  }

  Editar(data: any): void {
    this.router.navigate(['editar', data._id], {relativeTo: this.route});
  }

}
