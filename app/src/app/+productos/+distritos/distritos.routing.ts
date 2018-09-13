import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { DistritosComponent } from './distritos.component';
import { DistritoComponent } from './distrito/distrito.component';

export const routes: Routes = [
    {
        path: '',
        component: DistritosComponent,
        data: { pageTitle: 'Distritos' }
    },
    {
        path: 'nuevo',
        component: DistritoComponent,
        data: { pageTitle: 'Asignar Sucursal' }
    },
    {
        path: ':id',
        component: DistritoComponent,
        data: { pageTitle: 'Editar Distrito' }
    }
];

export const routing = RouterModule.forChild(routes)
