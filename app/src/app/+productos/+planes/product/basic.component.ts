import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ProductService } from './../product.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'product-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class BasicComponent implements OnInit, AfterViewChecked {
  variations: any = [];
  affiliations_plan: any = [];
  productImageUrl = '';

  @Input() product: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;
  @ViewChild('productImageInput') productImageInput;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  // this.productService.getAffiliationsPlan(product_id)
  ngOnInit() {
      this.productImageUrl = '';
      this.blockui.start('content');
      Observable.zip(
        this.productService.getVariations(),
        this.productService.getAffiliationsPlan()
      ).subscribe(([cats, affi]: [any, any]) => {
        console.log(cats);
        if (cats.success) {
          this.variations = cats.result;
        }
        if (affi.success) {
          this.affiliations_plan = affi.result;
        }
        this.blockui.stop('content');
      });
  }

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
      }
    }
  };

  ngAfterViewChecked() {
    if (typeof this.product.variation_type_id !== 'undefined' && this.product.variation_type_id === null) {
      this.product.variation_type_id = '';
    }
    /*
    if (typeof this.product.brand_id !== 'undefined' && this.product.brand_id === null) {
      this.product.brand_id = '';
    }
    if (typeof this.product.product_tag !== 'undefined' && this.product.product_tag === null) {
      this.product.product_tag = '';
    }*/
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
    const fileBrowser = this.productImageInput.nativeElement;
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.product.product_id) {
      this.productService.updateBasic(this.product.product_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.product, 'Actualización', 'actualizado'));
          if (data.success && formData.has('product_image')) {
            this.productImageUrl = '';
            if (data.product_image_url) {
              this.product.product_image_url = data.product_image_url + '?v' + (new Date().getTime().toString());  
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
    } 
    else {
      this.productService.saveBasic(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.product, 'Creación', 'creado'));
          if (data.success) {
            this.productImageUrl = '';
            // this.router.navigate([data.id], {relativeTo: this.route.parent});
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

  getAlert(result, product, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (!product.brand_name) {
      product.brand_name = '';
    }
    if (result.messages && result.messages.product_image) {
      message = 'Para un producto nuevo es obligatoria una imagen';
    }
    if (result.messages && result.messages.product_model) {
      message = 'El modelo ingresado ya fue tomado por otro producto';
    }
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = message.length ? message : 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido ' + desc_mode;
    } else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = message.length ? message : 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
