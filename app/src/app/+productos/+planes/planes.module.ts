import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { PlanService } from './plan.service';

import { routing } from './planes.routing';
import { PlanesComponent } from './planes.component';
import { PlanComponent } from './plan/plan.component';
import { PlanBasicComponent } from './plan/basic.component';
import { InfocomercialComponent } from './plan/infocomercial.component';

@NgModule({
    declarations: [
        PlanesComponent,
        PlanComponent,
        PlanBasicComponent,
        InfocomercialComponent
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
        PlanService
    ]
 })
 export class PlanesModule {}
