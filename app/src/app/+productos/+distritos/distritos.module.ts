import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { DistritosService } from './distritos.service';

import { routing } from './distritos.routing';
import { DistritosComponent } from './distritos.component';
import { DistritoComponent } from './distrito/distrito.component';
import { DistritoBasicComponent } from './distrito/basic.component';

//import { PlanBasicComponent } from './plan/basic.component';
//import { InfocomercialComponent } from './plan/infocomercial.component';

@NgModule({
    declarations: [
        DistritosComponent,
        DistritoComponent,
        DistritoBasicComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminValidationModule,
        SmartadminInputModule,
        FormContainerModule,
        Select2Module,
        AccordionModule.forRoot(),
        routing
    ],
    providers: [
        DistritosService
    ]
 })
 export class DistritosModule {}
