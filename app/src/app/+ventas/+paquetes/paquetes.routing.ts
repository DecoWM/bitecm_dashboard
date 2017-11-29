import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

import {PaquetesComponent} from './paquetes.component';
import {PaqueteFormComponent} from './paquete-form/paquete-form.component';

export const routes: Routes = [
    {
        path: '',
        component: PaquetesComponent,
        data: {pageTitle: ''}
    },
    {
        path: 'crear',
        component: PaqueteFormComponent,
        data: {pageTitle: 'Crear Paquete'}
    },
    {
        path: 'editar/:id',
        component: PaqueteFormComponent,
        data: {pageTitle: 'Editar Paquete'}
    }
];

export const routing = RouterModule.forChild(routes)
