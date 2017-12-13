import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';

import { ImportacionService } from './importacion.service';
import { routing } from './importacion.routing';
import { ImportacionComponent } from './importacion.component';

@NgModule({
    declarations: [
        ImportacionComponent,
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
        ImportacionService
    ]
 })
 export class ImportacionModule {}
