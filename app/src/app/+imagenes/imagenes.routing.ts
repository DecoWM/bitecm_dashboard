import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ImagenesComponent } from './imagenes.component';

export const routes: Routes = [
    {
        path: '',
        component: ImagenesComponent,
        data: { pageTitle: '' }
    }
];

export const routing = RouterModule.forChild(routes)
