import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdenesService } from '../ordenes.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

declare var $: any;

@Component({
  selector: 'status-form',
  templateUrl: './status-form.component.html',
  styles: [`
    .participantes-list{ list-style: none; }
    .participantes-list li{ padding-bottom: 5px; }
  `]
})
export class StatusFormComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  blockContent: Subject<any> = new Subject();

  order_id: number;
  status: any = {};
  status_history: any = [];
  status_list: any[];

  validationOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      titulo: {
        validators: {
          notEmpty: {
            message: 'Titulo en cada idioma requerido'
          }
        }
      }
    }
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordenesService: OrdenesService
  ) { }

  ngOnInit() {
    this.blockUI.start();
    this.order_id = this.route.snapshot.params.id;
    Observable.zip(
      this.ordenesService.getStatusHistory(this.order_id)
    ).subscribe(([d_status_history]: [any]) => {
      this.status_history = d_status_history.result;
      this.blockUI.stop();
      this.blockContent.next(true);
    });
  }

  onSelectChange(event) {
    const data = event.params.data;
    const inputName = event.currentTarget.name;
    this.status[inputName] = data.id;
  }

  onDateChange(event) {
    this[event.currentTarget.name] = event.data;
    this.status[event.currentTarget.name] = this.ordenesService.fromSimpleDateToISO(event.data);
  }

  onValidationSuccess(e) {
    if (e.type === 'success') {
      this.save(this.status);
    }
  }

  save(status) {
    if (status) {
      this.ordenesService.createStatus(this.order_id, status).subscribe((message) => {
        this.router.navigate(['ventas', 'ordenes', 'status', this.order_id]);
      });
    }
  }
}
