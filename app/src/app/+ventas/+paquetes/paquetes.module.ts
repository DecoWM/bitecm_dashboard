import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerModule } from './../shared/form-container/form-container.module';

import {SmartadminModule} from '../../shared/smartadmin.module'
import {SmartadminDatatableModule} from '../../shared/ui/datatable/smartadmin-datatable.module';
import {SmartadminValidationModule} from '../../shared/forms/validation/smartadmin-validation.module';
import {routing} from './paquetes.routing';
import {PaquetesComponent} from './paquetes.component';
import {DetallePaqueteComponent} from './detalle/detalle-paquete.component';
import {PaqueteFormComponent} from './paquete-form/paquete-form.component';

import {PaquetesService} from './../shared/paquetes.service';

@NgModule({
    declarations: [
        PaquetesComponent,
        DetallePaqueteComponent,
        PaqueteFormComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminValidationModule,
        routing,
        ReactiveFormsModule,
        FormContainerModule
    ],
    entryComponents: [DetallePaqueteComponent],
    providers: [
        PaquetesService
    ]
  })
  export class PaquetesModule {}
  