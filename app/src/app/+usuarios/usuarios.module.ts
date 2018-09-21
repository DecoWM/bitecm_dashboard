import { NgModule } from '@angular/core';

import { SmartadminModule } from '../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { UsuariosService } from './usuarios.service';

import { routing } from './usuarios.routing';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioBasicComponent } from './usuario/basic.component';

@NgModule({
    declarations: [
        UsuariosComponent,
        UsuarioComponent,
        UsuarioBasicComponent
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
        UsuariosService
    ]
 })
 export class UsuariosModule {}
