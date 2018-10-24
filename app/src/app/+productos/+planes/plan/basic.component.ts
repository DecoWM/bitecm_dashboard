import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PlanService } from './../plan.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'plan-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class PlanBasicComponent implements OnInit, AfterViewChecked {
  variations: any = [];
  affiliations_plan: any = [];
  productImageUrl = '';

  validationOptions = {
    rules: {
      variation_type_id : {
        required : true
      },
      product_name : {
        required : true
      },
      product_price : {
        required : true,
        number: true
        // pattern: /\d+(\.\d{1,2})?/
      },
      plan_bono : {
        required : true
      }
    },
    messages : {
      variation_type_id : {
        required : 'Debes seleccionar una modalidad.'
      },
      product_name : {
        required : 'Debes ingresar un nombre de plan.'
      },
      product_price : {
        required : 'Debes ingresar un precio',
        number: 'Debes ingresar un número',
        pattern: 'Solo se aceptan números con 2 decimales'
      },
      plan_bono : {
        required : 'Debes ingresar la descripción del bono'
      }
    }
  };

  @Input() plan: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;
  @ViewChild('productImageInput') productImageInput;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private planService: PlanService,
    private notificationService: NotificationService
  ) {}

  // this.planService.getAffiliationsPlan(product_id)
  ngOnInit() {
      this.productImageUrl = '';
      this.blockui.start('content');
      Observable.zip(
        this.planService.getVariations(),
        this.planService.getAffiliationsPlan()
      ).subscribe(([cats, affi]: [any, any]) => {
        console.log(cats);
        if (cats.success) {
          this.variations = cats.result;
        }
        if (affi.success) {
          this.affiliations_plan = affi.result;
        }
        this.plan.plan_type = 'Postpago';
        this.blockui.stop('content');
      });
  }

  ngAfterViewChecked() {
    if (typeof this.plan.variation_type_id !== 'undefined' && this.plan.variation_type_id === null) {
      this.plan.variation_type_id = '';
    }
  }

  changeFilename(event) {
    const uploadedFiles = event.target.files;
    this.productImageUrl = uploadedFiles[0].name;
  }

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  onValidationSuccess(e) {
    this.save(e);
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.plan.plan_id) {
      this.planService.updateBasic(this.plan.plan_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.plan, 'Actualización', 'actualizado'));
          if (data.success && formData.has('product_image')) {
            this.productImageUrl = '';
            if (data.product_image_url) {
              this.plan.product_image_url = data.product_image_url + '?v' + (new Date().getTime().toString());
            }
          }
          this.blockui.stop('content');
        }, (error) => {
          this.onAlert.emit({
            'title': 'Archivo pesado',
            'message': 'El archivo de imágen es muy pesado, solo se permiten 10mb',
            'mode': 'danger'
          });
          this.blockui.stop('content');
        });
    } else {
      this.planService.saveBasic(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.plan, 'Creación', 'creado'));
          if (data.success) {
            this.productImageUrl = '';
            this.router.navigate([data.id], {relativeTo: this.route.parent});
          }
          this.blockui.stop('content');
        }, (error) => {
          this.onAlert.emit({
            'title': 'Archivo pesado',
            'message': 'El archivo de imágen es muy pesado, solo se permiten 10mb',
            'mode': 'danger'
          });
          this.blockui.stop('content');
        });
    }
  }

  getAlert(result, plan, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'El plan ' + plan.plan_name + ' ha sido ' + desc_mode;
    } else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'El plan ' + plan.plan_name + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
