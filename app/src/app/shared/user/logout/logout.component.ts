import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from '../../utils/notification.service';

declare var $: any;

@Component({
  selector: 'sa-logout',
  templateUrl: './logout.component.html',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private authService: AuthService
  ) { }

  showPopup() {
    this.notificationService.smartMessageBox({
      title : '<i class="fa fa-sign-out txt-color-orangeDark"></i> Cerrar Sesión <span class="txt-color-orangeDark"><strong></strong></span>',
      content : '¿Seguro que quieres cerrar sesión?',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.logout()
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnInit() {

  }

}
