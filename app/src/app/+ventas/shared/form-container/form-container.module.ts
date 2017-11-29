import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container.component';
import { SmartadminValidationModule } from '../../../shared/forms/validation/smartadmin-validation.module';

@NgModule({
  imports: [
    CommonModule,
    SmartadminValidationModule
  ],
  declarations: [FormContainerComponent],
  exports: [FormContainerComponent]
})
export class FormContainerModule { }
