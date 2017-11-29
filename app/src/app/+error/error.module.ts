import {NgModule} from '@angular/core';
import {SmartadminModule} from '../shared/smartadmin.module'
import {routing} from './error.routing';
import {ErrorComponent} from './error.component';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    routing
    // SmartadminModule
  ]
})
export class ErrorModule {}
