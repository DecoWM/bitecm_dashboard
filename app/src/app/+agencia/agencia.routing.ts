import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'subagencias',
        pathMatch: 'full'
    },
    {
        path: 'mi-agencia',
        loadChildren: './+mi-agencia/mi-agencia.module#MiAgenciaModule',
        data: {pageTitle: 'Mi Agencia'}
    },
    {
        path: 'subagencias',
        loadChildren: './+subagencias/subagencias.module#SubagenciasModule',
        data: {pageTitle: 'Sub Agencias'}
    }
];

export const routing = RouterModule.forChild(routes)
