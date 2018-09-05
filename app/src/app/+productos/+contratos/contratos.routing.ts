import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ContratosComponent } from './contratos.component';
import { ContratoComponent } from './contrato/contrato.component';

export const routes: Routes = [
    {
        path: '',
        component: ContratosComponent,
        data: { pageTitle: 'Contratos' }
    },
    {
        path: 'nuevo',
        component: ContratoComponent,
        data: { pageTitle: 'Nuevo Contrato' }
    },
    {
        path: ':id',
        component: ContratoComponent,
        data: { pageTitle: 'Editar Contrato' }
    }
];

export const routing = RouterModule.forChild(routes)
