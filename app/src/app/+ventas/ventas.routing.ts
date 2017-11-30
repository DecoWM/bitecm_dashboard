import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ordenes',
        pathMatch: 'full'
    },
    {
        path: 'ordenes',
        loadChildren: './+ordenes/ordenes.module#OrdenesModule',
        data: {pageTitle: 'Ordenes'}
    }
];

export const routing = RouterModule.forChild(routes)
