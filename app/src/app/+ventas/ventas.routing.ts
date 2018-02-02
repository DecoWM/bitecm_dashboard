import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

import {AdminGuard} from './../shared/auth/guard/admin.guard';

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
    },
    {
        path: 'reportes',
        canActivate: [AdminGuard],
        loadChildren: './+reportes/reportes.module#ReportesModule',
        data: {pageTitle: 'Reportes'}
    }
];

export const routing = RouterModule.forChild(routes)
