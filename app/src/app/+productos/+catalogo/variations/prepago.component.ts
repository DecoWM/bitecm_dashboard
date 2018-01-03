import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PrepagoFormComponent } from './prepago-form.component';

import { ProductService } from './../product.service';
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

  @Input() product: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChildren(PrepagoFormComponent) planForms: QueryList<PrepagoFormComponent>;

  saveObs: Subject<any> = new Subject();
  updateObs: Subject<any> = new Subject();
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
    });
  }

  saveAll() {
    const saveVariations = [];
    const updateVariations = [];
    let count = 0;
    this.planForms.forEach((formComp, index) => {
      const variation = formComp.formPrepago.value;
      if (variation.variation_allowed && formComp.formValidate.valid()) {
        if (variation.product_variation_id) {
          updateVariations.push(variation);
        } else {
          saveVariations.push(variation);
        }
      }
      count++;
      if (count === this.planForms.length) {
        console.log(saveVariations);
        console.log(updateVariations);
        Observable.zip(
          this.variationService.savePrepaidVariations(this.product_id, saveVariations),
          this.variationService.updatePrepaidVariations(this.product_id, updateVariations)
        ).subscribe(([save, update]: [any, any]) => {
          this.onAlert.emit(this.getAlert(save, 'agregadas'));
          this.onAlert.emit(this.getAlert(update, 'actualizadas'));
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
              });
          }
        });
      }
    });
  }

  getAlert(result, title_mode): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Variaciones prepago' + title_mode;
      message = result.result;
    } else {
      mode = 'danger';
      title = 'Variaciones prepago no ' + title_mode;
      message = result.result;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
