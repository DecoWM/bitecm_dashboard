import { Component, OnInit, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SubAgenciasService } from './../../shared/subagencias.service';
import { SubagenciasDetalleComponent } from './../subagencias-detalle/subagencias-detalle.component';

@Component({
  selector: 'app-subagencias-list',
  templateUrl: './subagencias-list.component.html',
  styles: []
})
export class SubagenciasListComponent implements OnInit {
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  dcomp: Type<any> = SubagenciasDetalleComponent;

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
    private subagenciasService: SubAgenciasService
  ) { }

  ngOnInit() {
    this.subagenciasService.getSubagencias()
      .subscribe((data: any) => {
        this.itemsObs.next(data.result);
      });
  }

  Editar(data: any): void {
    this.router.navigate(['editar', data._id], {relativeTo: this.route});
  }

}
