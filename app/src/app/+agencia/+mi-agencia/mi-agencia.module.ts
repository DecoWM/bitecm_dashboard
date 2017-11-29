import { FormContainerModule } from './../../+itinerarios/shared/form-container/form-container.module';
import { SmartadminInputModule } from './../../shared/forms/input/smartadmin-input.module';
import { SmartadminDatatableModule } from './../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminModule } from './../../shared/smartadmin.module';
import { AgenciasService } from './../shared/agencias.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiAgenciaFormComponent } from './mi-agencia-form/mi-agencia-form.component';
import { routing } from './mi-agencia.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    SmartadminDatatableModule,
    SmartadminInputModule,
    FormContainerModule
  ],
  declarations: [MiAgenciaFormComponent],
  providers: [AgenciasService]
})
export class MiAgenciaModule { }
