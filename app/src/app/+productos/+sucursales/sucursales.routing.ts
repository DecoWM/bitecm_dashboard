import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { SucursalesComponent } from './sucursales.component';
import { SucursalComponent } from './sucursal/sucursal.component';

export const routes: Routes = [
    {
        path: '',
        component: SucursalesComponent,
        data: { pageTitle: 'Sucursales' }
    },
    {
        path: 'nuevo',
        component: SucursalComponent,
        data: { pageTitle: 'Nueva Sucursal' }
    },
    {
        path: ':id',
        component: SucursalComponent,
        data: { pageTitle: 'Editar Sucursal' }
    }
];

export const routing = RouterModule.forChild(routes)
