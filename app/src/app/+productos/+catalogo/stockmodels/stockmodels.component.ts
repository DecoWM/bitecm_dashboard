import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
  _addBlocks = 0;

  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  public get allowedBlocks(): Array<Number> {
    const foo = [];
    for (let i = 1; i <= this._addBlocks; i++) {
       foo.push(i);
    }
    return foo;
  }

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

  addSMC() {
    this._addBlocks++;
  }

  getAlert(result): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Éxito!';
      message = result.result;
    } else {
      mode = 'danger';
      title = 'Error';
      message = result.result;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }
}
