import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { OrdenesService } from './ordenes.service';

import { NotificationService } from '../../shared/utils/notification.service';
import { BlockUIService } from 'ng-block-ui';
import { Socket } from 'ng-socket-io';

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

  options = {
    dom: 'Bfrtip',
    pageLength: 25,
    /*columnDefs: [ {
      targets: [0, 8],
      orderable: false
    } ],*/
    order: [[1, 'desc']],
    // colReorder: true
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

    this.socket.on('connect', function () {
      console.log('Conectado a socket.io');
    });

    this.socket.on('order completed', function (event) {
      console.log('Nueva orden #' + event.order_id);
      self.ordenesService.getOrdenSimple(event.order_id)
      .subscribe((data: any) => {
        console.log(data);
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
            'credit_status' : orden.credit_status
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

  detail(data: any): void {
    this.router.navigate([data.order_id], {relativeTo: this.route});
  }
}
