import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { MarcasService } from './marcas.service';

import { routing } from './marcas.routing';
import { MarcasComponent } from './marcas.component';
import { MarcaComponent } from './marca/marca.component';
import { MarcaBasicComponent } from './marca/basic.component';

@NgModule({
    declarations: [
        MarcasComponent,
        MarcaComponent,
        MarcaBasicComponent
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
        MarcasService
    ]
 })
 export class MarcasModule {}
