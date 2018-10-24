import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TiendasService } from './../tiendas.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'tienda-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class TiendaBasicComponent implements OnInit {

  branches: any = [];
  districts: any = [];

  storeOptions = {
    rules: {
      branch_id : {
        required : true,
        number: true
      },
      district_id : {
        required : true,
        number: true
      },
      store_name : {
        required : true
      },
      store_slug : {
        required : true
      },
      store_ubigeo : {
        required : true,
        number: true,
        maxlength: 6
      },
      store_address : {
        required : false
      }
    },
    messages : {
      branch_id : {
        required : 'Debes seleccionar una Branch.'
      },
      district_id : {
        required : 'Debes seleccionar un Distrito.'
      },
      store_name : {
        required : 'Debes ingresar un nombre de tienda.'
      },
      store_slug : {
        required : 'Debes ingresar un código de tienda.'
      },
      store_ubigeo : {
        required : 'Debes ingresar un código de ubigeo (número de 6 dígitos).'
      }
    }
  };

  @Input()  store: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private storeService: TiendasService,
    private notificationService: NotificationService
  ) {}
 
  ngOnInit() {
      // EDITAR
      const store_id = this.route.snapshot.params.id;
      if (store_id) {
        this.blockui.start('content');
        Observable.zip(  
          this.storeService.getStore(store_id),
          this.storeService.getBranches(),
          this.storeService.getDistrictsByStore(store_id)
        ).subscribe(([dept, bran, dist]: [any, any, any]) => {
          if (dept.success) {
            this.store = dept.result;
          }
          if (bran.success) {
            this.branches = bran.result;
          }
          if (dist.success) {
            this.districts = dist.result;
          }
          this.blockui.stop('content');
        });
      } 
      // NUEVO
      else {
        this.storeService.getBranches()
         .subscribe((data: any) => {
          if (data.success) {
            this.branches = data.result;
          }
          this.blockui.stop('content');
        });
      }
  }

  onValidationSuccess(e) {
    this.save(e);
  }

  onSelectBranchChange(event){
    const branch_id = event.target.value;
    this.storeService.getDistricts(branch_id)
      .subscribe((data: any) => {
         console.log(data);
         if (data.success) {
           this.districts = data.result;
         }
         this.blockui.stop('content');
    });
  }

  cmdRegresar(){
    this.router.navigate(['/productos/tiendas']);
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.store.store_id) {
      console.log('id:' + this.store.store_id);
      console.log(formData);
      this.storeService.updateStore(this.store.store_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.store, 'Actualización', 'actualizada'));
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
      this.storeService.storeStore(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.store, 'Creación', 'creada'));
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

  getAlert(result, store, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'La Tienda ' + store.branch_name + ' ha sido ' + desc_mode;
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'La Tienda ' + store.brancht_name + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

}
