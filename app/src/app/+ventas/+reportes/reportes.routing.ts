import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

import { ExportComponent } from './export/export.component';

export const routes: Routes = [
  {
    path: '',
    component: ExportComponent,
    data: { pageTitle: '' }
  }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class routing {}
