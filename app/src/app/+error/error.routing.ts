import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error.component';

export const routes: Routes = [
  {
    path: ':code',
    component: ErrorComponent
  }
];

export const routing = RouterModule.forChild(routes);
