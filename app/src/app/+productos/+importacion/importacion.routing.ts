import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ImportacionComponent } from './importacion.component';

export const routes: Routes = [
    {
        path: '',
        component: ImportacionComponent,
        data: { pageTitle: '' }
    }
];

export const routing = RouterModule.forChild(routes)
