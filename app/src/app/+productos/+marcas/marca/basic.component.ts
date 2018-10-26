import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MarcasService } from './../marcas.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'marca-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class MarcaBasicComponent implements OnInit {

  variations: any = [];

  brandOptions = {
    rules: {
      brand_name : {
        required : true
      },
    },
    messages : {
      brand_name : {
        required : 'Debes ingresar un nombre de marca.'
      }
    }
  };

  @Input()  brand: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private brandService: MarcasService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
      this.blockui.start('content');
      this.blockui.stop('content');
      /*
      const contract_id = this.route.snapshot.params.id;
      if (contract_id) {
        this.blockui.start('content');
        this.contractService.getContract(contract_id)
        .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            this.contract = data.result;
          }
          this.blockui.stop('content');
        });
      } else {
        this.blockui.stop('content');
      }
      */
  }

  onValidationSuccess(e) {
    this.save(e);
  }

  cmdRegresar(){
    this.router.navigate(['/productos/marcas']);
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.brand.brand_id) {
      console.log('id:' + this.brand.brand_id);
      console.log(formData);
      this.brandService.updateBrand(this.brand.brand_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.brand, 'Actualización', 'actualizada'));
          if (data.success) {
           //this.router.navigate(['productos/contratos'],{ preserveFragment: true });
          }
          this.blockui.stop('content');
        }, (error) => {
          /*this.onAlert.emit({
            'title': 'Archivo pesado',
            'message': 'El archivo de imágen es muy pesado, solo se permiten 10mb',
            'mode': 'danger'
          });*/
          this.blockui.stop('content');
        });
    } else {
      this.brandService.storeBrand(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.brand, 'Creación', 'creada'));
          if (data.success) {
           //this.router.navigate(['productos/contratos'],{ preserveFragment: true });
          }
          this.blockui.stop('content');
        }, (error) => {
          /*
          this.onAlert.emit({
            'title': 'Archivo pesado',
            'message': 'El archivo de imágen es muy pesado, solo se permiten 10mb',
            'mode': 'danger'
          });
          */
          this.blockui.stop('content');
        });
    }
  }

  getAlert(result, brand, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'La Marca ' + brand.brand_name + ' ha sido ' + desc_mode;
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'La Marca ' + brand.brand_name + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

}
