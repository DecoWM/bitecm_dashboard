import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SucursalesService } from './sucursales.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'sucursales',
  templateUrl: './sucursales.component.html',
  styles: []
})
export class SucursalesComponent implements OnInit {
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
    private branchService: SucursalesService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando sucursales...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.branchService.getBranches()
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

  detail(branch: any): void {
    this.router.navigate([branch.branch_id], {relativeTo: this.route});
  }

  showPopupPublish(branch): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Publicar 
        <span class="txt-color-orangeDark">
          <strong>${branch.branch_name} </strong>
        </span>`,
      content : '¿Seguro que quieres publicar esta sucursal?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(branch);
      }
    });
  }

  showPopupUnpublish(branch): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Despublicar 
        <span class="txt-color-orangeDark">
          <strong>${branch.branch_name} </strong>
        </span>`,
      content : '¿Seguro que quieres despublicar esta sucursal?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(branch);
      }
    });
  }

  publish(branch: any): void {
    this.blockui.start('content');
    this.branchService.publishBranch(branch.branch_id)
      .subscribe((res: any) => {
        if (res.success) {
          branch.active = 1;
          branch.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertPublish(res, branch));
        }
        this.blockui.stop('content');
      });
  }

  unpublish(branch: any): void {
    this.blockui.start('content');
    this.branchService.unpublishBranch(branch.branch_id)
      .subscribe((res: any) => {
        if (res.success) {
          branch.active = 0;
          branch.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, branch));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, branch): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Publicación completada';
      message = 'La Sucursal ' + branch.branch_name + ' ha sido publicada';
    } else {
      mode = 'danger';
      title = 'Publicación fallida';
      message = 'La Sucursal ' + branch.branch_name + ' no pudo ser publicada';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  getAlertUnpublish(result, branch): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Despublicación completada';
      message = 'La Sucursal ' + branch.branch_name + ' ha sido despublicado';
    } else {
      mode = 'danger';
      title = 'Despublicación fallida';
      message = 'La Sucursal ' + branch.branch_name + ' no pudo ser despublicado';
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
