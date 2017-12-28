import { NgModule } from '@angular/core';

import { SmartadminModule } from '../../shared/smartadmin.module'
import { SmartadminDatatableModule } from '../../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminValidationModule } from '../../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../../shared/forms/input/smartadmin-input.module';
import { FormContainerModule } from '../../shared/forms/custom/form-container/form-container.module';
import { Select2Module } from '../../shared/forms/input/select2/select2.module';

import { ProductService } from './product.service';
import { StockModelService } from './stockmodel.service';
import { VariationService } from './variation.service';

import { routing } from './catalogo.routing';
import { CatalogoComponent } from './catalogo.component';
import { ProductComponent } from './product/product.component';
import { ProductBasicComponent } from './product/basic.component';
import { ProductSpecsComponent } from './product/specs.component';
import { StockModelsComponent } from './stockmodels/stockmodels.component';
import { PrepagoVariationsComponent } from './variations/prepago.component';
import { PostpagoVariationsComponent } from './variations/postpago.component';

@NgModule({
    declarations: [
        CatalogoComponent,
        ProductComponent,
        ProductBasicComponent,
        ProductSpecsComponent,
        StockModelsComponent,
        PrepagoVariationsComponent,
        PostpagoVariationsComponent
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
        ProductService,
        StockModelService,
        VariationService
    ]
 })
 export class CatalogoModule {}
