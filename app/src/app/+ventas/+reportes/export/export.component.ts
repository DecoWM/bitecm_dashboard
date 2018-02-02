import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ReportesService } from './../reportes.service';

import { NotificationService } from '../../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'ventas-reportes-export',
  templateUrl: './export.component.html',
  styles: []
})
export class ExportComponent implements OnInit {
  alert: any = null;

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

  ngOnInit() {
    this.alert = null;
  }

  exportGeneralOrders(e) {
    const formData = new FormData(document.forms.namedItem('form-general-orders'));
    this.reportesService.exportGeneralOrders(formData)
      .subscribe((data: any) => {
        if (data.success) {
          this.getAlert(data, 'Reporte General de Ordenes');
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

  exportGeneralSales(e) {
    const formData = new FormData(document.forms.namedItem('form-general-sales'));
    this.reportesService.exportGeneralSales(formData)
      .subscribe((data: any) => {
        if (data.success) {
          this.getAlert(data, 'Reporte General de Ventas');
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

  exportBestSellers(e) {
    const formData = new FormData(document.forms.namedItem('form-best-sellers'));
    this.reportesService.exportBestSellers(formData)
      .subscribe((data: any) => {
        if (data.success) {
          this.getAlert(data, 'Reporte de Productos mas Vendidos');
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
    this.printAlert({
      'title': title,
      'message': message,
      'mode': mode
    });
  }

  printAlert(alert): void {
    if (!alert) {
      alert = [];
    }
    if (alert && !(alert instanceof Array)) {
      alert = [alert];
    }
    alert.map((item, ix) => {
      switch (item.mode) {
        case 'success':
          item.icon = 'check';
          item.color = '#8ac38b';
        break;
        case 'danger':
          item.icon = 'warning';
          item.color = '#c46a69';
        break;
      }
      return item;
    });
    this.alert = alert;
    this.alert.forEach((item, ix) => {
      this.notificationService.smallBox({
        title: item.title,
        content: item.message,
        color: item.color,
        iconSmall: 'fa-fw fa fa-' + item.icon + ' bounce animated',
        timeout: 4000
      });
    })
  }
}
