import {ModuleWithProviders} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'mis-itinerarios',
        pathMatch: 'full'
    },
    {
        path: 'paquetes',
        loadChildren: './+paquetes/paquetes.module#PaquetesModule',
        data: {pageTitle: 'Paquetes'}
    },
    {
        path: 'mis-itinerarios',
        loadChildren: './+mis-itinerarios/mis-itinerarios.module#MisItinerariosModule',
        data: {pageTitle: 'Mis Itinerarios'}
    },
    {
        path: 'predefinidas',
        loadChildren: './+predefinidas/predefinidas.module#PredefinidasModule',
        data: {pageTitle: 'Actividades Predefinidas'}
    }
];

export const routing = RouterModule.forChild(routes)
