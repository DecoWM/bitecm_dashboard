import { NgModule } from '@angular/core';

import { SmartadminModule } from '../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../shared/forms/input/select2/select2.module';
import { SliderModelsComponent } from './slider/slidermodels.component';
import { SliderFormComponent } from './slider/slider-form.component';
import { HomeModelsComponent } from './home/homemodels.component';
import { HomeModelFormComponent } from './home/homemodel-form.component';
import { BannerModelsComponent } from './banner/bannermodels.component';
import { BannerModelFormComponent } from './banner/bannermodel-form.component';


import { ImagenesService } from './imagenes.service';
import { SliderModelService } from './slidermodel.service';

import { routing } from './imagenes.routing';
import { ImagenesComponent } from './imagenes.component';

@NgModule({
    declarations: [
        ImagenesComponent,
        SliderModelsComponent,
        SliderFormComponent,
        HomeModelsComponent,
        HomeModelFormComponent,
        BannerModelsComponent,
        BannerModelFormComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminValidationModule,
        SmartadminInputModule,
        FormContainerModule,
        Select2Module,
        routing
    ],
    providers: [
        ImagenesService,
        SliderModelService
    ]
 })
 export class ImagenesModule {}
