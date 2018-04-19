import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PlanService } from './plan.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'planes',
  templateUrl: './planes.component.html',
  styles: []
})
export class PlanesComponent implements OnInit {
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
    order: [[4, 'desc']],
    // colReorder: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private planService: PlanService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando productos...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.planService.getPlans()
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

  detail(product: any): void {
    this.router.navigate([product.plan_id], {relativeTo: this.route});
  }

  showPopupPublish(product): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Publicar 
        <span class="txt-color-orangeDark">
          <strong>${product.plan_name} ${product.plan_price}</strong>
        </span>`,
      content : '¿Seguro que quieres publicar este plan?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(product);
      }
    });
  }

  showPopupUnpublish(product): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Despublicar 
        <span class="txt-color-orangeDark">
          <strong>${product.plan_name} ${product.plan_price}</strong>
        </span>`,
      content : '¿Seguro que quieres despublicar este plan?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(product);
      }
    });
  }

  publish(product: any): void {
    this.blockui.start('content');
    this.planService.publishProduct(product.plan_id)
      .subscribe((res: any) => {
        if (res.success) {
          product.active = 1;
          product.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertPublish(res, product));
        }
        this.blockui.stop('content');
      });
  }

  unpublish(product: any): void {
    this.blockui.start('content');
    this.planService.unpublishProduct(product.plan_id)
      .subscribe((res: any) => {
        if (res.success) {
          product.active = 0;
          product.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, product));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, product): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Publicación completada';
      message = 'El plan ' + product.plan_name + ' ' + product.plan_price + ' ha sido publicado';
    } else {
      mode = 'danger';
      title = 'Publicación fallida';
      message = 'El plan ' + product.plan_name + ' ' + product.plan_price + ' no pudo ser publicado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  getAlertUnpublish(result, product): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Despublicación completada';
      message = 'El plan ' + product.plan_name + ' ' + product.plan_price + ' ha sido despublicado';
    } else {
      mode = 'danger';
      title = 'Despublicación fallida';
      message = 'El plan ' + product.plan_name + ' ' + product.plan_price + ' no pudo ser despublicado';
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
