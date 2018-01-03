import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { CatalogoComponent } from './catalogo.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogoComponent,
    data: { pageTitle: '' }
  },
  {
    path: 'nuevo',
    component: ProductComponent,
    data: { pageTitle: 'Nuevo Producto' }
  },
  {
    path: ':id',
    component: ProductComponent,
    data: { pageTitle: 'Editar Producto' }
  }
];

export const routing = RouterModule.forChild(routes)
