import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { DtDetalleComponent } from './dt-detalle.component';
import { DtDetalleDirective } from './dt-detalle.directive';
import { DtCondTriggerDirective } from './dt-condtrigger.directive';

// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DatatableComponent,
    DtDetalleComponent,
    DtDetalleDirective,
    DtCondTriggerDirective
  ],
  exports: [
    DatatableComponent,
    DtDetalleComponent,
    DtDetalleDirective,
    DtCondTriggerDirective
  ],
  entryComponents: [
    DtDetalleComponent
  ]
})
export class SmartadminDatatableModule { }
