import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ExportComponent } from './export/export.component';

export const routes: Routes = [
    {
        path: '',
        component: ExportComponent,
        data: { pageTitle: '' }
    }
];

export const routing = RouterModule.forChild(routes)
