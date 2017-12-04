import { ModuleWithProviders } from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

import { OrdenesComponent } from './ordenes.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { DetalleOrdenComponent } from './detalle/detalle-orden.component';

export const routes: Routes = [
    {
        path: '',
        component: OrdenesComponent,
        data: { pageTitle: '' }
    },
    {
        path: ':id',
        component: DetalleOrdenComponent,
        data: { pageTitle: 'Orden' }
    },
    {
        path: ':id/status',
        component: StatusFormComponent,
        data: { pageTitle: 'Estados de la Orden' }
    }
];

export const routing = RouterModule.forChild(routes)
