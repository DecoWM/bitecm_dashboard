import { PredefinidaFormComponent } from './predefinida-form/predefinida-form.component';
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";

import {PredefinidasComponent} from './predefinidas.component';
//import {FormularioPredefinidaComponent} from './formulario/formulario-predefinida.component';

export const routes:Routes = [
    {
        path: '', 
        component: PredefinidasComponent,
        data: {pageTitle: ''}
    },
    {
        path: 'crear',
        component: PredefinidaFormComponent,
        data: {pageTitle: 'Crear Actividad Predefinida'}
    },
    {
        path: 'editar/:id',
        component: PredefinidaFormComponent,
        data: {pageTitle: 'Editar Actividad Predefinida'}
    }
];

export const routing = RouterModule.forChild(routes)
