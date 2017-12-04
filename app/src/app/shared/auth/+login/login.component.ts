import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { NotificationService } from '../../../shared/utils/notification.service';
import {config} from '../../../shared/smartadmin.config';
// import {LayoutService} from './../../../shared/layout/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    // private layoutService: LayoutService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    /*config.skins.find((_skin) => {
      if (_skin.name === config.smartSkin) {
        this.layoutService.onSmartSkin(_skin);
      }
    })*/
  }

  login(event) {
    event.preventDefault();
    this.authService.login(this.username, this.password)
      .subscribe((data) => {
        if (data.success) {
          if (this.authService.isAgente()) {
            this.router
              .navigate(['/ventas/ordenes']);
          }
        }
      }, (error) => {
        if (error.status === 401) {
          this.showWrongPasswordPopup();
        }
        if (error.status === 404) {
          this.showInvalidUserPopup();
        }
      });
  }

  showInvalidUserPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Usuario Inválido',
      content : 'El usuario no existe en la Base de Datos o se encuentra inactivo',
      buttons : '[Entendido]'
    });
  }
  showWrongPasswordPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Contraseña Inválida',
      content : 'La contraseña ingresada no coincide en la Base de Datos',
      buttons : '[Entendido]'
    });
  }

}
