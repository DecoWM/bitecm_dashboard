import { AuthService } from './../../auth/auth.service';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {LayoutService} from '../../layout/layout.service';

@Component({
  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
})
export class LoginInfoComponent implements OnInit {

  user: any;

  constructor(
    private auth: AuthService,
    private layoutService: LayoutService
  ) {
  }

  ngOnInit() {
    this.user = this.auth.user; console.log(this.user);
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle();
  }

}
