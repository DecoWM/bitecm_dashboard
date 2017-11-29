import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MiAgenciaFormComponent } from './mi-agencia-form/mi-agencia-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MiAgenciaFormComponent,
    data: {
      pageTitle: 'Mi Agencia'
    }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
