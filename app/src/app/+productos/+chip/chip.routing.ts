import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ChipComponent } from './chip.component';

export const routes: Routes = [
  {
    path: '',
    component: ChipComponent,
    data: { pageTitle: '' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class routing {
}
