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
        path: 'chip',
        loadChildren: './+chip/chip.module#ChipModule',
        data: {pageTitle: 'Chip'}
    },
    {
        path: 'importacion',
        loadChildren: './+importacion/importacion.module#ImportacionModule',
        data: {pageTitle: 'Importación'}
    },
    {
        path: 'planes',
        loadChildren: './+planes/planes.module#PlanesModule',
        data: {pageTitle: 'Planes'}
    },
    {
        path: 'contratos',
        loadChildren: './+contratos/contratos.module#ContratosModule',
        data: {pageTitle: 'Contratos'}
    }
];

export const routing = RouterModule.forChild(routes)
