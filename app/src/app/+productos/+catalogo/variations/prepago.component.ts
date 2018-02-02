import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PrepagoFormComponent } from './prepago-form.component';

import { VariationService } from './../variation.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'prepago-variations',
  templateUrl: './prepago.component.html',
  styles: []
})
export class PrepagoVariationsComponent implements OnInit {
  plans: any = [];
  product_id: number;

  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChildren(PrepagoFormComponent) planForms: QueryList<PrepagoFormComponent>;

  variations: any = [];
  variationsByPlan: any = {};

  validationOptions = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private variationService: VariationService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.product_id = this.route.snapshot.params.id;
    this.blockui.start('content');
    Observable.zip(
      this.variationService.getPrepaidPlans(),
      this.variationService.getPrepaidVariations(this.product_id)
    ).subscribe(([plans, vars]: [any, any]) => {
      if (plans.success) {
        this.plans = plans.result;
      }
      if (vars.success) {
        this.variations = vars.result;
        this.variations.map((variation, index) => {
          this.variationsByPlan[variation.plan_id] = variation;
          return variation;
        });
      }
      this.blockui.stop('content');
    });
  }

  saveAll() {
    this.onAlert.emit(null);
    const saveVariations = [];
    const updateVariations = [];
    let count = 0;
    this.planForms.forEach((formComp, index) => {
      const variation = formComp.formPrepago.value;
      variation.active = 1;
      if (formComp.formPrepago.dirty && formComp.formValidate.valid()) {
        if (variation.product_variation_id) {
          variation.active = variation.variation_allowed ? 1 : 0;
          updateVariations.push(variation);
        } else {
          if (variation.variation_allowed) {
            saveVariations.push(variation);
          }
        }
        // formComp.formPrepago.resetForm();
      }
      count++;
      if (count === this.planForms.length && (saveVariations.length || updateVariations.length)) {
        this.blockui.start('content');
        Observable.zip(
          this.variationService.savePrepaidVariations(this.product_id, saveVariations),
          this.variationService.updatePrepaidVariations(this.product_id, updateVariations)
        ).subscribe(([save, update]: [any, any]) => {
          const alerts = [];
          if (!save.nop) {
            alerts.push(this.getAlert(save, 'agregadas'));
          }
          if (!update.nop) {
            alerts.push(this.getAlert(update, 'actualizadas'));
          }
          if (save.success || update.success) {
            this.variationService.getPrepaidVariations(this.product_id)
              .subscribe((vars: any) => {
                if (vars.success) {
                  this.variations = vars.result;
                  this.variations.map((item, i) => {
                    this.variationsByPlan[item.plan_id] = item;
                    return item;
                  });
                }
                this.blockui.stop('content');
              });
          } else {
            this.blockui.stop('content');
          }
          this.onAlert.emit(alerts);
        });
      }
    });
  }

  getAlert(result, title_mode): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Variaciones prepago ' + title_mode;
      message = result.result;
    } else {
      mode = 'danger';
      title = 'Variaciones prepago no pudieron ser ' + title_mode;
      message = result.result;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
