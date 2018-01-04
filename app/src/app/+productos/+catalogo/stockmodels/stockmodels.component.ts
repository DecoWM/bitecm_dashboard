import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StockModelFormComponent } from './stockmodel-form.component';

import { StockModelService } from './../stockmodel.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'stock-models',
  templateUrl: './stockmodels.component.html',
  styles: []
})
export class StockModelsComponent implements OnInit {
  colors: any = [];
  stockmodels: any = [];
  product_id: number;

  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChildren(StockModelFormComponent) stockModelForms: QueryList<StockModelFormComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private stockModelService: StockModelService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.product_id = this.route.snapshot.params.id;
    Observable.zip(
      this.stockModelService.getColors(),
      this.stockModelService.getStockModels(this.product_id)
    ).subscribe(([colors, stockmodels]: [any, any]) => {
      if (colors.success) {
        this.colors = colors.result;
      }
      if (stockmodels.success) {
        this.stockmodels = stockmodels.result;
      }
    });
  }

  saveAll() {
    /*this.onAlert.emit(null);
    const saveStockModels = [];
    const updateStockModels = [];
    let count = 0;
    this.stockModelForms.forEach((formComp, index) => {
      const stockModel = formComp.formStockModel.value;
      if (formComp.formStockModel.dirty && formComp.formValidate.valid()) {
        if (stockModel.stock_model_id) {
          updateStockModels.push(stockModel);
        } else {
          saveStockModels.push(stockModel);
        }
        formComp.formStockModel.resetForm();
      }
      count++;
      if (count === this.stockModelForms.length && (saveStockModels.length || updateStockModels.length)) {
        Observable.zip(
          this.stockModelService.savePrepaidVariations(this.product_id, saveStockModels),
          this.stockModelService.updatePrepaidVariations(this.product_id, updateStockModels)
        ).subscribe(([save, update]: [any, any]) => {
          const alerts = [];
          if (!save.nop) {
            alerts.push(this.getAlert(save, 'agregadas'));
          }
          if (!update.nop) {
            alerts.push(this.getAlert(update, 'actualizadas'));
          }
          this.onAlert.emit(alerts);
          if (save.success || update.success) {
            this.stockModelService.getPrepaidVariations(this.product_id)
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
    });*/
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
