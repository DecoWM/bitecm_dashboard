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
    if (!this.username.length || !this.password.length) {
      this.showEmptyFieldsPopup();
    } else {
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
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Credenciales Incorrectas',
      content : 'Los datos ingresados son incorrectos.',
      buttons : '[Entendido]'
    });
  }
  showWrongPasswordPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-user txt-color-orangeDark"></i> Usuario no encontrado',
      content : 'El usuario indicado no existe o se enuentra inactivo.',
      buttons : '[Entendido]'
    });
  }

}
