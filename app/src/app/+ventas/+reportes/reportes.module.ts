import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';

import { ReportesService } from './reportes.service';
import { routing } from './reportes.routing';
import { ExportComponent } from './export/export.component';
import { MiniGeneralOrdersComponent } from './mini/mini-general-orders.component';

@NgModule({
    declarations: [
        ExportComponent,
        MiniGeneralOrdersComponent
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
    exports: [
        MiniGeneralOrdersComponent
    ],
    providers: [
        ReportesService
    ]
 })
 export class ReportesModule {}
