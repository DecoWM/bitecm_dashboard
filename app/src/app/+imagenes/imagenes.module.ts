import { NgModule } from '@angular/core';
import { routing } from './imagenes.routing';

import { SmartadminModule } from '../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../shared/forms/input/select2/select2.module';
import { ImagenFormComponent } from './imagen-form.component';
import { ImagenesByTypeComponent } from './imagenes-bytype.component';
import { ImagenesComponent } from './imagenes.component';

import { ImagenesService } from './imagenes.service';

@NgModule({
    declarations: [
        ImagenesComponent,
        ImagenesByTypeComponent,
        ImagenFormComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminValidationModule,
        SmartadminInputModule,
        FormContainerModule,
        Select2Module,
        routing
    ],
    providers: [
        ImagenesService
    ]
 })
 export class ImagenesModule {}
