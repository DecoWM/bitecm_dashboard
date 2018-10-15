import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { TiendasService } from './tiendas.service';

import { routing } from './tiendas.routing';
import { TiendasComponent } from './tiendas.component';
import { TiendaComponent } from './tienda/tienda.component';
import { TiendaBasicComponent } from './tienda/basic.component';

@NgModule({
    declarations: [
        TiendasComponent,
        TiendaComponent,
        TiendaBasicComponent
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
        TiendasService
    ]
 })
 export class TiendasModule {}
