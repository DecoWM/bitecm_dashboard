import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    {
        path: '',
        component: UsuariosComponent,
        data: { pageTitle: 'Usuarios' }
    },
    {
        path: 'nuevo',
        component: UsuarioComponent,
        data: { pageTitle: 'Nuevo Usuario' }
    },
    {
        path: ':id',
        component: UsuarioComponent,
        data: { pageTitle: 'Editar Usuario' }
    }
];

export const routing = RouterModule.forChild(routes)
