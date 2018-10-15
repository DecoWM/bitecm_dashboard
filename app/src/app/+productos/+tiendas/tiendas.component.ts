import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TiendasService } from './tiendas.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'tiendas',
  templateUrl: './tiendas.component.html',
  styles: []
})
export class TiendasComponent implements OnInit {
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  alert: any = null;

  options = {
    dom: 'Bfrtip',
    pageLength: 25,
    columnDefs: [ {
      targets: [ 6 ],
      orderable: false
    } ],
    order: [[5, 'desc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private storeService: TiendasService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando tiendas...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.storeService.getStores()
      .subscribe((data: any) => {
        console.log(data);
        this.blockui.stop('content');
        const items = data.result;
        this.itemsObs.next(items);
        if (items.length === 0) {
          this.loadingStatus = 'No se encontraron registros';
        }
      }, (error) => {
        this.blockui.stop('content');
        if (error.status === 401) {
        // this.authService.logout(true);
        }
      });
  }

  detail(store: any): void {
    this.router.navigate([store.store_id], {relativeTo: this.route});
  }

  showPopupPublish(store): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Publicar 
        <span class="txt-color-orangeDark">
          <strong>${store.store_name} </strong>
        </span>`,
      content : '¿Seguro que quieres publicar esta tienda?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(store);
      }
    });
  }

  showPopupUnpublish(store): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Despublicar 
        <span class="txt-color-orangeDark">
          <strong>${store.store_name} </strong>
        </span>`,
      content : '¿Seguro que quieres despublicar esta tienda?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(store);
      }
    });
  }

  publish(store: any): void {
    this.blockui.start('content');
    this.storeService.publishStore(store.store_id)
      .subscribe((res: any) => {
        if (res.success) {
          store.active = 1;
          store.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertPublish(res, store));
        }
        this.blockui.stop('content');
      });
  }

  unpublish(store: any): void {
    this.blockui.start('content');
    this.storeService.unpublishStore(store.store_id)
      .subscribe((res: any) => {
        if (res.success) {
          store.active = 0;
          store.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, store));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, store): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Publicación completada';
      message = 'La Tienda ' + store.store_name + ' ha sido publicada';
    } else {
      mode = 'danger';
      title = 'Publicación fallida';
      message = 'La Tienda ' + store.store_name + ' no pudo ser publicada';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  getAlertUnpublish(result, store): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Despublicación completada';
      message = 'La Tienda ' + store.store_name + ' ha sido despublicado';
    } else {
      mode = 'danger';
      title = 'Despublicación fallida';
      message = 'La Tienda ' + store.store_name + ' no pudo ser despublicado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  printAlert(alert): void {
    if (alert && !(alert instanceof Array)) {
      alert = [alert];
    }
    this.alert = alert;
  }
}
