import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { StockModelService } from './../stockmodel.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { ModalDirective } from 'ngx-bootstrap';
import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'stock-models',
  templateUrl: './stockmodels.component.html',
  styles: []
})
export class StockModelsComponent implements OnInit {
  color: any = {};
  colors: any = [];
  stockmodels: any = [];
  product_id: number;
  _addBlocks = 1;

  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('lgModal') public lgModal: ModalDirective;
  @ViewChild('formColor') formColor;
  formValidate: any;

  validationOptions = {
    rules: {
      color_name : {
        required : true
      },
      color_hexcode : {
        required : true,
        minlength: 6,
        maxlength: 6
      }
    },
    messages : {
      color_name : {
        required : 'Debes ingresar un nombre de color'
      },
      color_hexcode : {
        required : 'Debes ingresar un código hexadecimal para el color',
        minlength: 'El código acepta como mínimo 6 caracteres',
        maxlength: 'El código acepta como máximo 6 caracteres'
      }
    }
  };

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

  showColorModal() {
    this.lgModal.show();
  }

  hideColorModal() {
    this.lgModal.hide();
    this.formColor.resetForm();
    this.formValidate.resetForm();
  }

  addColor(e) {
    this.stockModelService.saveColor(this.color)
      .subscribe((data: any) => {
        this.onAlert.emit(this.getAlert(data));
        if (data.success) {
          this.colors.push({
            color_id: data.id,
            color_name: this.color.color_name
          });
          this.lgModal.hide();
          this.formColor.resetForm();
          e.resetForm();
        }
      });
  }

  referenceValidator(formValidate) {
    this.formValidate = formValidate;
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
