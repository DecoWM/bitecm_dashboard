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
  dtTrigger: Subject<any> = new Subject();
  alert: any = null;
  order_id: number;
  status: any = {
    order_status_id: '',
    notify_customer: false,
    comment: ''
  };
  status_history: any = [];
  status_list: any[];

  validationOptions = {
    rules: {
      order_status_id : {
        required : true
      }
    },
    messages : {
      order_status_id : {
        required : 'Debes seleccionar un estado.'
      },
    }
  };

  options = {
    dom: 'Bfrtip',
    pageLength: 10,
    order: [[0, 'desc']]
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
    $(event.currentTarget).blur();
  }

  onValidationSuccess(e) {
    console.log(e);
    this.save(this.status, e);
  }

  save(status, e) {
    if (status) {
      this.ordenesService.createStatus(this.order_id, status)
        .subscribe((message: any) => {
          this.alert = this.getAlert(message);
          if (message.success) {
            this.status = {
              order_status_id: '',
              notify_customer: false,
              comment: ''
            };
            e.resetForm();
            $('#select-estado').parent('label').removeClass('state-error').removeClass('state-success');
          } else {
            $('#select-estado').parent('label').removeClass('state-success').addClass('state-error');
          }
          // $('button[name="submit"]').prop('disabled', (i, v) => !v);
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
