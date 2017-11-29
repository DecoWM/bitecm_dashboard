import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/app-layouts/main-layout.component';
import {AuthLayoutComponent} from './shared/layout/app-layouts/auth-layout.component';
import {EmptyLayoutComponent} from './shared/layout/app-layouts/empty-layout.component';
import {AuthComponent} from './shared/auth/auth.component';
import {AuthGuard} from './shared/auth/guard/auth.guard';
import {NoAuthGuard} from './shared/auth/guard/noauth.guard';
import {AdminGuard} from './shared/auth/guard/admin.guard';
import {AgenteGuard} from './shared/auth/guard/agente.guard';
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
      /*{
        path: 'inicio',
        loadChildren: 'app/+home/home.module#HomeModule',
        data: { pageTitle: 'Inicio' }
      },*/
      {
        path: 'itinerarios',
        canActivate: [AgenteGuard],
        loadChildren: 'app/+itinerarios/itinerarios.module#ItinerariosModule',
        data: { pageTitle: 'Itinerarios' }
      },
      {
        path: 'conversaciones',
        canActivate: [OperadorGuard],
        loadChildren: 'app/+conversaciones/conversaciones.module#ConversacionesModule',
        data: { pageTitle: 'Conversaciones' }
      },
      {
        path: 'usuarios',
        canActivate: [AdminGuard],
        loadChildren: 'app/+usuarios/usuarios.module#UsuariosModule',
        data: { pageTitle: 'Usuarios' }
      },
      {
        path: 'agencia',
        canActivate: [AdminGuard],
        loadChildren: 'app/+agencia/agencia.module#AgenciaModule',
        data: { pageTitle: 'Agencia' }
      },
      {
        path: 'mi-perfil',
        loadChildren: 'app/+usuarios/+mi-perfil/mi-perfil.module#MiPerfilModule',
        data: { pageTitle: 'Mi Perfil' }
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
