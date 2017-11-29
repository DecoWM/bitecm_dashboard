import {NgModule} from '@angular/core';

import {SmartadminModule} from '../../shared/smartadmin.module'
import {SmartadminDatatableModule} from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';

import {routing} from './actividades.routing';
import {ActividadesComponent} from './actividades.component';
import {DetalleActividadComponent} from './detalle/detalle-actividad.component';
import { ActividadFormComponent } from './actividad-form/actividad-form.component';
import { ItinerariosService } from '../shared/itinerarios.service';
import { FormContainerModule } from '../shared/form-container/form-container.module';
@NgModule({
    declarations: [
        ActividadesComponent,
        DetalleActividadComponent,
        ActividadFormComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        routing,
        SmartadminInputModule,
        FormContainerModule,
    ],
    entryComponents: [
        DetalleActividadComponent
    ],
    providers: [ ItinerariosService ]
  })
  export class ActividadesModule {}
