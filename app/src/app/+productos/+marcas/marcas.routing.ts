import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { MarcasComponent } from './marcas.component';
import { MarcaComponent } from './marca/marca.component';

export const routes: Routes = [
    {
        path: '',
        component: MarcasComponent,
        data: { pageTitle: 'Marcas' }
    },
    {
        path: 'nuevo',
        component: MarcaComponent,
        data: { pageTitle: 'Nueva Marca' }
    },
    {
        path: ':id',
        component: MarcaComponent,
        data: { pageTitle: 'Editar Marca' }
    }
];

export const routing = RouterModule.forChild(routes)
