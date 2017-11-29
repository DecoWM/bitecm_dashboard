import { ModuleWithProviders } from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

import { MisItinerariosComponent } from './mis-itinerarios.component';
import { ItinerarioFormComponent } from './itinerario-form/itinerario-form.component';

export const routes: Routes = [
    {
        path: '',
        component: MisItinerariosComponent,
        data: { pageTitle: '' }
    },
    {
        path: 'crear',
        component: ItinerarioFormComponent,
        data: { pageTitle: 'Crear Itinerario' }
    },
    {
        path: 'editar/:id',
        component: ItinerarioFormComponent,
        data: { pageTitle: 'Editar Itinerario' }
    },
    {
        path: ':itinerario_id/actividades',
        loadChildren: './../+actividades/actividades.module#ActividadesModule',
        data: { pageTitle: 'Actividades del Itinerario' }
    }
];

export const routing = RouterModule.forChild(routes)
