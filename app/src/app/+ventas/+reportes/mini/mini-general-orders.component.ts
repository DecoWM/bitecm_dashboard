import { Component, OnInit, Type, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ReportesService } from './../reportes.service';

import { NotificationService } from '../../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'mini-general-orders',
  templateUrl: './mini-general-orders.component.html',
  styles: []
})
export class MiniGeneralOrdersComponent implements OnInit {
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onDateChanged: EventEmitter<any> = new EventEmitter();

  validationOptions = {
    rules: {
      begin_date : {
        required : true
      },
      end_date : {
        required : true
      }
    },
    messages : {
      begin_date : {
        required : 'Debes seleccionar una fecha de inicio'
      },
      end_date : {
        required : 'Debes seleccionar una fecha de fin'
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private reportesService: ReportesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  exportGeneralOrders(e) {
    const formData = new FormData(document.forms.namedItem('form-general-orders'));
    this.reportesService.exportGeneralOrders(formData)
      .subscribe((data: any) => {
        if (data.success) {
          this.onAlert.emit(this.getAlert(data, 'Reporte General de Ordenes'));
          const link = document.createElement('a');
          link.href = data.result.file_url;
          link.download = data.result.file_name;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          $(link).remove();
        }
      });
  }

  dateChanged(event) {
    console.log('date changed ', event);
    this.onDateChanged.emit();
  }

  getAlert(data, title_mode): any {
    let mode, title, message = '';
    if (data.success) {
      mode = 'success';
      title = 'Reporte exitoso';
      message = title_mode + ': ' + data.result.file_name + ' generado.';
    } else {
      mode = 'danger';
      title = 'Reporte fallido';
      message = title_mode + ' no pudo ser generado ';
    }
  }
}
