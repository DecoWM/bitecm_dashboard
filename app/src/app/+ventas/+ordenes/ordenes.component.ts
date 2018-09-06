import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { OrdenesService } from './ordenes.service';

import { NotificationService } from '../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';
import { Socket } from 'ng-socket-io';

declare var $: any;

@Component({
  selector: 'ordenes',
  templateUrl: './ordenes.component.html',
  styles: []
})
export class OrdenesComponent implements OnInit {
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  ordenes: any = [];
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
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private ordenesService: OrdenesService,
    private notificationService: NotificationService,
    private socket: Socket
  ) {
    this.loadingStatus = 'Cargando ordenes...';
  }

  ngOnInit() {
    const self = this;
    this.alert = null;
    this.ruta = this.router.url;

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
    this.ordenesService.getOrdenes()
      .subscribe((data: any) => {
        // console.log(data);
        this.blockui.stop('content');
        this.ordenes = data.result;
        this.itemsObs.next(this.ordenes);
        if (this.ordenes.length === 0) {
          this.loadingStatus = 'No se encontraron registros';
        }
      }, (error) => {
        this.blockui.stop('content');
        if (error.status === 401) {
        // this.authService.logout(true);
        }
      });
  }

  initDtObj(dtObj) {
    this.dtObj = dtObj;
  }

  pageSelected(dtObj) {
    this.page = dtObj;
    // console.log("pagina:" + this.page);

    this.position = this.ruta.indexOf("#");
    if(this.position > 0){
      this.ruta = this.ruta.substring(1, this.position);
    }
    document.location.href = this.ruta + '#' +  this.page;
  }

  filterByDateRange() {
    if (this.dtObj) {
      this.dtObj.draw();
    }
  }

  detail(data: any): void {
    this.getIdOrdens();
    this.router.navigate([data.order_id], {relativeTo: this.route });
    // this.router.navigate([data.order_id], {relativeTo: this.route, fragment: this.page });
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

  getIdOrdens(){
    var items = []; 
    var columnValue;
    $('#tableI>tr>td:nth-child(1)').each( function(){
       columnValue = $.trim($(this).text()); 
       items.push(columnValue);
       console.log(columnValue);   
    });

    this.ordenesService.setFilter(items);
    this.ordenesService.setCursor(items[0]);
    //console.log(items);
    console.log("------");

  }

}
