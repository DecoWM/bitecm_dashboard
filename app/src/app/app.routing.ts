import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/app-layouts/main-layout.component';
import {AuthLayoutComponent} from './shared/layout/app-layouts/auth-layout.component';
import {EmptyLayoutComponent} from './shared/layout/app-layouts/empty-layout.component';
// import {AuthComponent} from './shared/auth/auth.component';
import {AuthGuard} from './shared/auth/guard/auth.guard';
import {NoAuthGuard} from './shared/auth/guard/noauth.guard';
import {AdminGuard} from './shared/auth/guard/admin.guard';
import {EditorGuard} from './shared/auth/guard/editor.guard';
import {OperadorGuard} from './shared/auth/guard/operador.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainLayoutComponent, 
    data: { pageTitle: '' },
    children: [
      /*{
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },*/
      {
        path: 'ventas',
        canActivate: [OperadorGuard],
        loadChildren: 'app/+ventas/ventas.module#VentasModule',
        data: { pageTitle: 'Ventas' }
      },
      {
        path: 'productos',
        canActivate: [EditorGuard],
        loadChildren: 'app/+productos/productos.module#ProductosModule',
        data: { pageTitle: 'Productos' }
      },
      {
        path: 'imagenes',
        canActivate: [EditorGuard],
        loadChildren: 'app/+imagenes/imagenes.module#ImagenesModule',
        data: { pageTitle: 'Imagenes' }
      }
    ]
  },
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    component: AuthLayoutComponent,
    loadChildren: 'app/shared/auth/auth.module#AuthModule',
    data: { pageTitle: 'Autorización' }
  },
  {
    path: 'error',
    component: EmptyLayoutComponent,
    loadChildren: 'app/+error/error.module#ErrorModule',
    data: { pageTitle: 'Error' }
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
