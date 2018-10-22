import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ContratosService } from './../contratos.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'contrato-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class ContratoBasicComponent implements OnInit {

  variations: any = [];
  //affiliations_plan: any = [];
  //productImageUrl = '';

  contractOptions = {
    rules: {
      contract_name : {
        required : true
      },
      contract_months : {
        required : true,
        number: true
      },
      weight : {
        required : true,
        number: true
      }
    },
    messages : {
      contract_name : {
        required : 'Debes ingresar un nombre de contrato.'
      },
      contract_months : {
        required : 'Debes ingresar un tiempo de duración.',
        number: 'Debes ingresar un número',
        pattern: 'Solo se aceptan números enteros'
      },
      weight : {
        required : 'Debes ingresar un número de orden.',
        number: 'Debes ingresar un número'
      }
    }
  };

  @Input() contract: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private contractService: ContratosService,
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
    this.router.navigate(['/productos/contratos']);
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.contract.contract_id) {
      console.log('id:' + this.contract.contract_id);
      console.log(formData);
      this.contractService.updateContract(this.contract.contract_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.contract, 'Actualización', 'actualizado'));
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
      this.contractService.storeContract(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.contract, 'Creación', 'creado'));
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

  getAlert(result, contract, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'El contrato ' + contract.contract_name + ' ha sido ' + desc_mode;
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'El contrato ' + contract.contract_name + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

}
