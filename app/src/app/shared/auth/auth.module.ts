import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {routing} from './auth.routing';
// import { AuthComponent } from './auth.component';
// import { AuthService } from './auth.service';
import { LoginModule } from './+login/login.module';
import { NotificationService } from '../utils/notification.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    LoginModule
  ],
  declarations: [ ],
  providers: [
    // AuthService,
    NotificationService
  ]
})
export class AuthModule { }
