import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ActividadesComponent} from './actividades.component';
import {ActividadFormComponent} from './actividad-form/actividad-form.component';

export const routes: Routes = [
    {
        path: '',
        component: ActividadesComponent,
        data: { pageTitle: '' }
    },
    {
        path: 'crear',
        component: ActividadFormComponent,
        data: { pageTitle: 'Crear Actividad' }
    },
    {
        path: 'editar/:id',
        component: ActividadFormComponent,
        data: { pageTitle: 'Editar Actividad' }
    }
];

export const routing = RouterModule.forChild(routes)
