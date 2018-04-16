import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'catalogo',
        pathMatch: 'full'
    },
    {
        path: 'catalogo',
        loadChildren: './+catalogo/catalogo.module#CatalogoModule',
        data: {pageTitle: 'Catalogo'}
    },
    {
        path: 'importacion',
        loadChildren: './+importacion/importacion.module#ImportacionModule',
        data: {pageTitle: 'Importación'}
    },
    {
        path: 'planes',
        loadChildren: './+planes/planes.module#PlanesModule',
        data: {pageTitle: 'Planes y Chips'}
    }
];

export const routing = RouterModule.forChild(routes)
