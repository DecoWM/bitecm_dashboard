import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';

import { OrdenesService } from './ordenes.service';
import { routing } from './ordenes.routing';
import { OrdenesComponent } from './ordenes.component';
import { DetalleOrdenComponent } from './detalle/detalle-orden.component';
// import { StatusFormComponent } from './status-form/status-form.component';

@NgModule({
    declarations: [
        OrdenesComponent,
        DetalleOrdenComponent,
        // StatusFormComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminInputModule,
        FormContainerModule,
        Select2Module,
        routing
    ],
    providers: [
        OrdenesService
    ]
 })
 export class OrdenesModule {}
