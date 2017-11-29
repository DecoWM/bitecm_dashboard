import { SmartadminModule } from './../../shared/smartadmin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SubagenciasFormComponent } from './subagencias-form/subagencias-form.component';
import { SubagenciasListComponent } from './subagencias-list/subagencias-list.component';
import { routing } from './subagencias.routing';
import { SubAgenciasService } from '../shared/subagencias.service';
import { SubagenciasDetalleComponent } from './subagencias-detalle/subagencias-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
  ],
  declarations: [
    SubagenciasFormComponent,
    SubagenciasListComponent,
    SubagenciasDetalleComponent
  ],
  entryComponents: [
    SubagenciasDetalleComponent
  ],
  providers: [ SubAgenciasService ]
})
export class SubagenciasModule { }
