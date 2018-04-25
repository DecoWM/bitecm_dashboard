import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PostpagoFormComponent } from './postpago-form.component';

import { VariationService } from './../variation.service';
import { ProductService } from './../product.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'postpago-plans',
  templateUrl: './postpago-plans.component.html',
  styles: []
})
export class PostpagoPlansComponent implements OnInit {
  plans: any = [];
  product_id: number;

  @Input() affiliation_id: any = null;
  @Input() contract_id: any = null;
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChildren(PostpagoFormComponent) planForms: QueryList<PostpagoFormComponent>;

  variations: any = [];
  variationsByPlan: any = {};
  best_plan = "";

  validationOptions = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private variationService: VariationService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    const self = this;
    this.product_id = this.route.snapshot.params.id;
    if (!this.product_id) {
      this.product_id = this.productService.getProductId();
    }
    this.blockui.start('content');
    Observable.zip(
      this.variationService.getPostpaidPlans(),
      this.variationService.getPostpaidVariations(this.product_id, this.affiliation_id, this.contract_id)
    ).subscribe(([plans, vars]: [any, any]) => {
      if (plans.success) {
        this.plans = plans.result;
      }
      if (vars.success) {
        this.variations = vars.result;
        console.log(vars);
        this.variations.map((variation, index) => {
          this.variationsByPlan[variation.plan_id] = variation;
          return variation;
        });
      }
      if(plans.success && vars.success && this.variations.length > 0){
        this.plans.forEach((plan, index) => {
          if(typeof self.variationsByPlan[plan.plan_id] !== 'undefined' && self.variationsByPlan[plan.plan_id] !== null){
            if(self.variationsByPlan[plan.plan_id].best_plan.toString() == "1") {                  
               self.best_plan = plan.plan_id;
               return;
            }
          }
        });
      }
      this.blockui.stop('content');
    });
  }

  saveAll() {
    const self = this;
    this.onAlert.emit(null);
    const saveVariations = [];
    const updateVariations = [];
    let count = 0;

    this.plans.forEach((plan, index) => {
        if(plan.plan_id.toString() == self.best_plan.toString()){
            if(typeof self.variationsByPlan[plan.plan_id] !== 'undefined' && self.variationsByPlan[plan.plan_id] !== null){
              self.variationsByPlan[plan.plan_id].best_plan = 1;
            }
        }
        else{
            if(typeof self.variationsByPlan[plan.plan_id] !== 'undefined' && self.variationsByPlan[plan.plan_id] !== null){
              self.variationsByPlan[plan.plan_id].best_plan = 0;
            }
        }
    });

    this.planForms.forEach((formComp, index) => {

      const variation = formComp.formPostpago.value;

      if(typeof self.variationsByPlan[variation.plan_id] !== 'undefined' && self.variationsByPlan[variation.plan_id] !== null){
        variation.best_plan = self.variationsByPlan[variation.plan_id].best_plan;
      }

      variation.active = 1;
      // if (formComp.formPostpago.dirty && formComp.formValidate.valid()) {
      if(variation.variation_allowed === true || variation.product_variation_price.length > 0){  
        if (formComp.formValidate.valid()) {
  
          if (variation.product_variation_id) {
            variation.active = variation.variation_allowed ? 1 : 0;
            updateVariations.push(variation);
          } else {
            if (variation.variation_allowed) {
              saveVariations.push(variation);
            }
          }
        // formComp.formPostpago.resetForm();
        }
      }
      count++;
      if (count === this.planForms.length && (saveVariations.length || updateVariations.length)) {
        this.blockui.start('content');

        Observable.zip(
          this.variationService.savePostpaidVariations(this.product_id, saveVariations, this.affiliation_id, this.contract_id),
          this.variationService.updatePostpaidVariations(this.product_id, updateVariations)
        ).subscribe(([save, update]: [any, any]) => {
          const alerts = [];
          if (!save.nop) {
            alerts.push(this.getAlert(save, 'agregadas'));
          }
          if (!update.nop) {
            alerts.push(this.getAlert(update, 'actualizadas'));
          }
          if (save.success || update.success) {
            this.variationService.getPostpaidVariations(this.product_id, this.affiliation_id, this.contract_id)
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
      title = 'Variaciones postpago ' + title_mode;
      message = result.result;
    } else {
      mode = 'danger';
      title = 'Variaciones postpago no pudieron ser ' + title_mode;
      message = result.result;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
