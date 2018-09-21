import { Component, OnInit, Type, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UsuariosService } from './usuarios.service';
import { NotificationService } from '../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
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
    private userService: UsuariosService,
    private notificationService: NotificationService
  ) {
    this.loadingStatus = 'Cargando usuarios...';
  }

  ngOnInit() {
    this.alert = null;
    this.blockui.start('content');
    this.userService.getUsers()
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

  detail(user: any): void {
    this.router.navigate([user.id], {relativeTo: this.route});
  }

  showPopupPublish(user): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Activar 
        <span class="txt-color-orangeDark">
          <strong>${user.user_name} </strong>
        </span>`,
      content : '¿Seguro que quieres activar este usuario?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publish(user);
      }
    });
  }

  showPopupUnpublish(user): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Desactivar 
        <span class="txt-color-orangeDark">
          <strong>${user.user_name} </strong>
        </span>`,
      content : '¿Seguro que quieres desactivar este usuario?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublish(user);
      }
    });
  }

  publish(user: any): void {
    this.blockui.start('content');
    this.userService.publishUser(user.id)
      .subscribe((res: any) => {
        if (res.success) {
          user.active = 1;
          user.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertPublish(res, user));
        }
        this.blockui.stop('content');
      });
  }

  unpublish(user: any): void {
    this.blockui.start('content');
    this.userService.unpublishUser(user.id)
      .subscribe((res: any) => {
        if (res.success) {
          user.active = 0;
          user.updated_at = res.result.updated_at;
          this.printAlert(this.getAlertUnpublish(res, user));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, user): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Activación completada';
      message = 'El usuario ' + user.user_name + ' ha sido activado';
    } else {
      mode = 'danger';
      title = 'Activación fallida';
      message = 'El usuario ' + user.user_name + ' no pudo ser activado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  getAlertUnpublish(result, user): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Desactivación completada';
      message = 'El usuario ' + user.user_name + ' ha sido desactivado';
    } else {
      mode = 'danger';
      title = 'Desactivación fallida';
      message = 'El usuario ' + user.user_name + ' no pudo ser desactivado';
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
