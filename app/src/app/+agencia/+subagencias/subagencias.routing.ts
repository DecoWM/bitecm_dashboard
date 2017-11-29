import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import { SubagenciasFormComponent } from './subagencias-form/subagencias-form.component';
import { SubagenciasListComponent } from './subagencias-list/subagencias-list.component';

export const routes: Routes = [
    {
        path: '',
        component: SubagenciasListComponent,
        data: {pageTitle: 'Sub Agencias'}
    },
    {
        path: 'crear',
        component: SubagenciasFormComponent,
        data: {pageTitle: 'Crear Sub Agencia'}
    },
    {
        path: 'editar/:id',
        component: SubagenciasFormComponent,
        data: {
            pageTitle: 'Editar Sub Agencia'
        }
    }
];

export const routing = RouterModule.forChild(routes)
