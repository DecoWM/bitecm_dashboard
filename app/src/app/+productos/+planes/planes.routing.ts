import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { PlanesComponent } from './planes.component';
import { PlanComponent } from './plan/plan.component';

export const routes: Routes = [
    {
        path: '',
        component: PlanesComponent,
        data: { pageTitle: 'Planes' }
    },
    {
        path: 'nuevo',
        component: PlanComponent,
        data: { pageTitle: 'Nuevo Plan' }
    },
    {
        path: ':id',
        component: PlanComponent,
        data: { pageTitle: 'Editar Plan' }
    }
];

export const routing = RouterModule.forChild(routes)
