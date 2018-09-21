import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';

import { CkeditorRoutingModule } from '../../+miscellaneous/+ckeditor/ckeditor-routing.module';
import { CkeditorComponent } from '../../+miscellaneous/+ckeditor/ckeditor.component';

import { Select2Module } from '../../shared/forms/input/select2/select2.module';
import { AccordionModule, CarouselModule } from 'ngx-bootstrap';

import { ProductService } from './product.service';
import { StockModelService } from './stockmodel.service';
import { VariationService } from './variation.service';

import { routing } from './catalogo.routing';
import { CatalogoComponent } from './catalogo.component';
import { ProductComponent } from './product/product.component';
import { ProductBasicComponent } from './product/basic.component';
import { ProductSpecsComponent } from './product/specs.component';
import { StockModelsComponent } from './stockmodels/stockmodels.component';
import { StockModelFormComponent } from './stockmodels/stockmodel-form.component';
import { PrepagoVariationsComponent } from './variations/prepago.component';
import { PrepagoFormComponent } from './variations/prepago-form.component';
import { PostpagoVariationsComponent } from './variations/postpago.component';
import { PostpagoAffiliationsComponent } from './variations/postpago-affiliations.component';
import { PostpagoPlansComponent } from './variations/postpago-plans.component';
import { PostpagoFormComponent } from './variations/postpago-form.component';

@NgModule({
    declarations: [
        CatalogoComponent,
        ProductComponent,
        ProductBasicComponent,
        ProductSpecsComponent,
        StockModelsComponent,
        StockModelFormComponent,
        PrepagoVariationsComponent,
        PrepagoFormComponent,
        PostpagoVariationsComponent,
        PostpagoAffiliationsComponent,
        PostpagoPlansComponent,
        PostpagoFormComponent
    ],
    imports: [
        SmartadminModule,
        SmartadminDatatableModule,
        SmartadminValidationModule,
        SmartadminInputModule,
        FormContainerModule,
        Select2Module,
        AccordionModule.forRoot(),
        routing
    ],
    exports: [
        ProductBasicComponent,
        ProductSpecsComponent,
        PrepagoVariationsComponent,
        PostpagoVariationsComponent
    ],
    providers: [
        ProductService,
        StockModelService,
        VariationService
    ]
 })
 export class CatalogoModule {}
