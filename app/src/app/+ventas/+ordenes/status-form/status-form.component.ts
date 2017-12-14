import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdenesService } from '../ordenes.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { BlockUIService } from 'ng-block-ui';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

declare var $: any;

@Component({
  selector: 'status-form',
  templateUrl: './status-form.component.html'
})
export class StatusFormComponent implements OnInit {
  alert: any = null;

  order_id: number;
  status: any = {};
  status_history: any = [];
  status_list: any[];

  validationOptions = {
    rules: {
      order_status_id: {
        required: true
      }
    },
    messages: {
      order_status_id: {
        required: 'Selecciona un estado'
      }
    },
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
    private blockui: BlockUIService,
    private ordenesService: OrdenesService
  ) { }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.order_id = this.route.snapshot.params.id;
    Observable.zip(
      this.ordenesService.getStatusHistory(this.order_id),
      this.ordenesService.getStatusList()
    ).subscribe(([d_sh, d_sl]: [any, any]) => {
      console.log(d_sh, d_sl);
      if (d_sh.success) {
        this.status_history = d_sh.result;
      }
      if (d_sl.success) {
        this.status_list = d_sl.result;
      }
      this.blockui.stop('content');
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
      this.save(this.status, e);
    }
  }

  save(status, e) {
    console.log(e);
    if (status) {
      console.log(status);
      this.ordenesService.createStatus(this.order_id, status)
        .subscribe((message: any) => {
          console.log(message);
          this.alert = this.getAlert(message);
          if (message.success) {
            this.status = {};
            e.target.reset();
          }
          $('button[name="submit"]').prop('disabled', (i, v) => !v);
          this.ordenesService.getStatusHistory(this.order_id)
            .subscribe((data: any) => {
              if (data.success) {
                this.status_history = data.result;
              }
            });
      });
    }
  }

  getAlert(data): any {
    let mode, title;
    if (data.success) {
      mode = 'success';
      title = 'Completado';
    } else {
      mode = 'danger';
      title = 'Fallido';
    }
    return {
      'title': title,
      'message': data.result,
      'mode': mode
    }
  }
}
