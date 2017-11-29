import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from './../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../shared/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';

import { ItinerariosService } from './../shared/itinerarios.service';
import { routing } from './mis-itinerarios.routing';
import { MisItinerariosComponent } from './mis-itinerarios.component';
import { DetalleItinerarioComponent } from './detalle/detalle-itinerario.component';
import { ItinerarioFormComponent } from './itinerario-form/itinerario-form.component';
import { PaquetesService } from '../shared/paquetes.service';
import { PredefinidasService } from './../shared/predefinidas.service';
import { ActividadesService } from '../shared/actividades.service';
import { ItinerariosTranslatePipe } from '../shared/itinerarios-translate.pipe';
import { SubAgenciasService } from '../../+agencia/shared/subagencias.service';
import { ClientesService } from '../../+usuarios/shared/clientes.service';

@NgModule({
    declarations: [
        MisItinerariosComponent,
        DetalleItinerarioComponent,
        ItinerarioFormComponent,
        ItinerariosTranslatePipe
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminInputModule,
        FormContainerModule,
        Select2Module,
        routing
    ],
    entryComponents: [
        DetalleItinerarioComponent
    ],
    providers: [
        ItinerariosService,
        ActividadesService,
        PredefinidasService,
        PaquetesService,
        ClientesService,
        SubAgenciasService
    ]
 })
 export class MisItinerariosModule {}
