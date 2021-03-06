import { Component, OnInit, Type, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { OrdenesService } from './ordenes.service';

import { NotificationService } from '../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';
import { Socket } from 'ng-socket-io';

declare var $: any;
import * as moment from 'moment';

@Component({
  selector: 'ordenes',
  templateUrl: './ordenes.component.html',
  styles: []
})
export class OrdenesComponent implements OnInit {
  @Input() public options2: any;

  loadingStatus = '';
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();

  ordenes: any = [];
  filters: any = [];
  servicio: any = null;
  startDate = '';
  finishDate = '';

  alert: any = null;
  page = '1';
  ruta = null;
  position = 0;

  dtObj: any = null;
  options = {
    buttons: [
      {extend: 'excel', text: 'Exportar filtrado'}
    ],
    pageLength: 25,
    order: [[2, 'desc']]
  };
  dateRangeOptions = {
    from: '#begin_date',
    to: '#end_date',
    column: 2
  };

  constructor(
    private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private ordenesService: OrdenesService,
    private notificationService: NotificationService,
    private socket: Socket
  ) {
  }

  ngOnInit() {
    const self = this;

    this.alert = null;
    this.ruta = this.router.url;
    this.servicio = null;

    this.socket.on('connect', function () {
      console.log('Conectado a socket.io');
    });

    this.socket.on('order completed', function (event) {
      console.log('Nueva orden #' + event.order_id);
      self.ordenesService.getOrdenSimple(event.order_id)
        .subscribe((data: any) => {
          if (data.success) {
            const orden = data.result;
            self.ordenes.unshift({
              'order_id': orden.order_id,
              'created_at' : orden.order_date,
              'id_number' : orden.id_number,
              'affiliation_type' : orden.affiliation_type,
              'service_type' : orden.service_type,
              'plan_name' : event.plan_name,
              'order_status_name' : orden.order_status_name,
              'total_igv' : orden.total_igv,
              'credit_status' : orden.credit_status,
              'equipo_plan' : orden.equipo_plan,
              'product_model': orden.product_model
            });
            self.notificationService.smallBox({
              title: 'Nueva orden registrada #' + orden.order_id,
              content: orden.created_at,
              color: '#8ac38b',
              iconSmall: 'fa-fw fa fa-check bounce animated',
              timeout: 4000
            });
          }
        });
    });

    this.blockui.start('content');

    // obtengo los valores de los filtros
    this.filters = this.ordenesService.getTextFilters();

    const weekRange = this.ordenesService.getWeekDateRange();

    this.startDate = weekRange.startDate;
    this.finishDate = weekRange.finishDate;

    $('#begin_date').val(this.startDate);
    $('#end_date').val(this.finishDate);

    this.getOrdenes(this.startDate, this.finishDate);
  }

  renderiza() {
    this.servicio = 'Pre';
    this.cmdPrueba();
    $('#servicio').trigger(jQuery.Event('keypress', {which: 13}));
  }

  initDtObj(dtObj) {
    this.dtObj = dtObj;
  }

  pageSelected(dtObj) {
    this.page = dtObj;
    this.position = this.ruta.indexOf('#');
    if (this.position > 0) {
      this.ruta = this.ruta.substring(1, this.position);
    }
    document.location.href = this.ruta + '#' +  this.page;
  }

  filterByDateRange() {
    this.startDate = $('#begin_date').val();
    this.finishDate = $('#end_date').val();

    /*if (this.dtObj) {
      this.dtObj.draw();
    }*/
  }

  detail(data: any): void {
    this.getIdOrdens();
    this.getValueFilters();
    this.router.navigate([data.order_id], { relativeTo: this.route });
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

  cmdPrueba() {
    $('#servicio').val('Pre');
    $('#servicio').focus();
    $('#servicio').keyup();
  }

  getIdOrdens() {
    const items = [];
    let columnValue;
    $('#tableI>tr>td:nth-child(1)').each(function() {
       columnValue = $.trim($(this).text());
       items.push(columnValue);
    });

    this.ordenesService.setFilter(items);
    this.ordenesService.setCursor(items[0]);
  }

  getValueFilters() {
    this.filters[0] = new Array(11);
    this.filters[0][0] = $('#nropedido').val();    // nropedido
    this.filters[0][1] = $('#sucursal').val();    // sucursal
    this.filters[0][2] = $('#fecha').val();    // fecha
    this.filters[0][3] = $('#dni').val();    // dni
    this.filters[0][4] = $('#tipolinea').val();    // tipolinea
    this.filters[0][5] = $('#servicio').val();    // servicio
    this.filters[0][6] = $('#equipo').val();    // equipo
    this.filters[0][7] = $('#plan').val();    // plan
    this.filters[0][8] = $('#estado').val();    // estado
    this.filters[0][9] = $('#total').val();    // total
    this.filters[0][10] = $('#evaluacion').val();   // evaluacion
    this.filters[0][11] = 1;  // nropagina

    this.ordenesService.setTextFilters(this.filters);
  }

  getOrdenes(startDate, finishDate) {
    this.loadingStatus = 'Cargando ordenes...';
    this.itemsObs = new Subject();

    this.ordenesService.getOrdenes({
      start_date: this.startDate,
      finish_date: this.finishDate
    })
      .subscribe((data: any) => {
        this.blockui.stop('content');

        if (!data.success) {
          this.loadingStatus = 'No se encontraron registros';
          return;
        }

        this.ordenes = data.result;

        if (data.result.length === 0) {
          this.loadingStatus = 'No se encontraron registros';
        } else {
          this.itemsObs.next(this.ordenes);
        }
      }, (error) => {
        this.blockui.stop('content');
      });
  }

  filter() {
    this.getOrdenes(this.startDate, this.finishDate);
  }
}
