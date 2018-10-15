import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { TiendasComponent } from './tiendas.component';
import { TiendaComponent } from './tienda/tienda.component';

export const routes: Routes = [
    {
        path: '',
        component: TiendasComponent,
        data: { pageTitle: 'Tiendas' }
    },
    {
        path: 'nuevo',
        component: TiendaComponent,
        data: { pageTitle: 'Nueva Tienda' }
    },
    {
        path: ':id',
        component: TiendaComponent,
        data: { pageTitle: 'Editar Tienda' }
    }
];

export const routing = RouterModule.forChild(routes)
