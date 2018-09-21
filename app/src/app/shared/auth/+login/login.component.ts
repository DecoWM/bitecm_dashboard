import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
import { NotificationService } from '../../../shared/utils/notification.service';
import {config} from '../../../shared/smartadmin.config';
// import {LayoutService} from './../../../shared/layout/layout.service';

declare var $: any;

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
      this.username = '';
      this.password = '';
    /*config.skins.find((_skin) => {
      if (_skin.name === config.smartSkin) {
        this.layoutService.onSmartSkin(_skin);
      }
    })*/
  }

  login(event) {
    event.preventDefault();
    $('#login-form input').blur();
    if (!this.username.length || !this.password.length) {
      this.showEmptyFieldsPopup();
    } else {
      this.authService.login(this.username, this.password)
        .subscribe((data) => {
          if (data.success) {
            if (this.authService.isOperador()) {
              this.router
                .navigate(['/ventas/ordenes']);
            } else if (this.authService.isEditor()) {
              this.router
                .navigate(['/productos/catalogo']);
            }
          }
        }, (error) => {
          if (error.status === 401) {
            this.router.navigate(['/auth/login']);
            this.showWrongPasswordPopup();
          }
          if (error.status === 404) {
            this.router.navigate(['/auth/login']);
            this.showInvalidUserPopup();
          }
        });
    }
  }

  showEmptyFieldsPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Campos imcompletos',
      content : 'Para iniciar sesión se debe ingresar el nombre de usuario y la contraseña.',
      buttons : '[Entendido]'
    });
  }
  showInvalidUserPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Usuario no encontrado',
      content : 'El usuario indicado no existe o se encuentra inactivo.',
      buttons : '[Entendido]'
    });
  }
  showWrongPasswordPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Contraseña Incorrecta',
      content : 'La contraseña ingresada no coincide con el usuario indicado',
      buttons : '[Entendido]'
    });
  }

}
