import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SucursalesService } from './../sucursales.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'sucursal-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class SucursalBasicComponent implements OnInit {

  variations: any = [];
  //affiliations_plan: any = [];
  //productImageUrl = '';

  branchOptions = {
    rules: {
      branch_name : {
        required : true
      },
      zip_code : {
        required : false
      },
      branch_address : {
        required : false
      }
    },
    messages : {
      branch_name : {
        required : 'Debes ingresar un nombre de sucursal.'
      }
    }
  };

  @Input()  branch: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private branchService: SucursalesService,
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
    this.router.navigate(['/productos/sucursales']);
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.branch.branch_id) {
      console.log('id:' + this.branch.branch_id);
      console.log(formData);
      this.branchService.updateBranch(this.branch.branch_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.branch, 'Actualización', 'actualizada'));
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
      this.branchService.storeBranch(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.branch, 'Creación', 'creada'));
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

  getAlert(result, branch, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'La Sucursal ' + branch.branch_name + ' ha sido ' + desc_mode;
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'La Sucursal ' + branch.brancht_name + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

}
