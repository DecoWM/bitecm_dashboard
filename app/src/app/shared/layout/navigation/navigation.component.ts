import {Component, OnInit} from '@angular/core';
// import {LoginInfoComponent} from '../../user/login-info/login-info.component';
import {AuthService} from './../../auth/auth.service';

@Component({
  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  usuario: any[];

  constructor(
    private auth: AuthService
  ) {}

  isAdmin() {
    return this.auth.isAdmin();
  }

  isAgente() {
    return this.auth.isAgente();
  }

  isOperador() {
    return this.auth.isOperador();
  }

  ngOnInit() {
    if (this.auth.user) {
      this.usuario = this.auth.user;
    }
  }

}
