import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { PlanesComponent } from './planes.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path: '',
        component: PlanesComponent,
        data: { pageTitle: 'Planes' }
    },
    {
        path: 'nuevo',
        component: ProductComponent,
        data: { pageTitle: 'Nuevo Plan' }
    },
    {
        path: ':id',
        component: ProductComponent,
        data: { pageTitle: 'Editar Plan' }
    }
];

export const routing = RouterModule.forChild(routes)