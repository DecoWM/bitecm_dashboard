import {NgModule} from '@angular/core';

import {SmartadminModule} from '../../shared/smartadmin.module'
import {SmartadminDatatableModule} from "../../shared/ui/datatable/smartadmin-datatable.module";
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../shared/form-container/form-container.module';

import {routing} from './predefinidas.routing';
import {PredefinidasComponent} from './predefinidas.component';
import {DetallePredefinidaComponent} from './detalle/detalle-predefinida.component';
import { PredefinidaFormComponent } from './predefinida-form/predefinida-form.component';
import { PredefinidasService } from './../shared/predefinidas.service';
import { ItinerariosService } from './../shared/itinerarios.service';

@NgModule({
    declarations: [
        PredefinidasComponent,
        DetallePredefinidaComponent,
        PredefinidaFormComponent,
        //FormularioPredefinidaComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        routing,
        FormContainerModule,
        SmartadminInputModule
    ],
    entryComponents: [
        DetallePredefinidaComponent
    ],
    providers: [
        PredefinidasService,
        ItinerariosService
    ]
})
export class PredefinidasModule {}