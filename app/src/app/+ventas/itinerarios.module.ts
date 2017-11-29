import {NgModule} from '@angular/core';

import {routing} from './itinerarios.routing';
import { SmartadminValidationModule } from './../shared/forms/validation/smartadmin-validation.module';

@NgModule({
  imports: [
    routing,
    SmartadminValidationModule
  ]
})
export class ItinerariosModule {}
