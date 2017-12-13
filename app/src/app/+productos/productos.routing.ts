import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'importacion',
        pathMatch: 'full'
    },
    {
        path: 'importacion',
        loadChildren: './+importacion/importacion.module#ImportacionModule',
        data: {pageTitle: 'Importación'}
    }
];

export const routing = RouterModule.forChild(routes)
