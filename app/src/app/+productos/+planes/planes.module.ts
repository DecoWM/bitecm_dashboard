import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { ProductService } from './product.service';

import { routing } from './planes.routing';
import { PlanesComponent } from './planes.component';
import { ProductComponent } from './product/product.component';
import { BasicComponent } from './product/basic.component';
import { InfocomercialComponent } from './product/infocomercial.component';

@NgModule({
    declarations: [
        PlanesComponent,
        ProductComponent,
        BasicComponent,
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
        ProductService
    ]
 })
 export class PlanesModule {}