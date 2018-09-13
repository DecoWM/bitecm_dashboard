import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DistritosService } from './../distritos.service';
import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'distrito-basic',
  templateUrl: './basic.component.html',
  styles: []
})
export class DistritoBasicComponent implements OnInit {
  departments: any = [];
  provinces: any = [];
  districts: any = [];
  branches: any = [];
  //affiliations_plan: any = [];
  //productImageUrl = '';

  districtOptions = {
    rules: {
      district_name : {
        required : true,
        number: true
      },
      branch_name : {
        required : true,
        number: true
      }
    },
    messages : {
      district_name : {
        required : 'Debes seleccionar un distrito.'
      },
      branch_name : {
        required : 'Debes seleccionar una sucursal.'
      }
    }
  };

  @Input() district: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private districtService: DistritosService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
      this.blockui.start('content');
        
       Observable.zip(
          this.districtService.getDepartments(),
          this.districtService.getBranches()
        ).subscribe(([dept, bran]: [any, any]) => {
          console.log(dept);
          if (dept.success) {
            this.departments = dept.result;
          }
          if (bran.success) {
            this.branches = bran.result;
          }
          this.blockui.stop('content');
       });

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

  onSelectDepartmentChange(event){
    const departament_id = event.target.value;
    //if (departament_id) {
      //this.blockui.start('content');
      this.districtService.getProvinces(departament_id)
      .subscribe((data: any) => {
         console.log(data);
         if (data.success) {
           this.provinces = data.result;
           this.districts = null;
         }
         this.blockui.stop('content');
      });
    /*}
    else{
      this.blockui.stop('content');
    }*/
  }

  onSelectProvinceChange(event){
     const province_id = event.target.value;
     //console.log(province_id);
    //if (province_id) {
      //this.blockui.start('content');
      this.districtService.getDistrictsByProvince(province_id)
      .subscribe((data: any) => {
         console.log(data);
         if (data.success) {
           this.districts = data.result;
         }
         this.blockui.stop('content');
      });
   /* }
    else{
      this.blockui.stop('content');
    }*/
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    /*
    if (this.district.contract_id) {
      console.log('id:' + this.district.contract_id);
      console.log(formData);
      this.districtService.updateDistrict(this.district.contract_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.district, 'Actualización', 'actualizado'));
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
         // this.blockui.stop('content');
       // });
    //} else {
      
      this.districtService.updateDistrict(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.district, 'Asignación', 'asignada'));
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
    //}
  }

  getAlert(result, district, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'La sucursal ' + district.branch_name + ' ha sido ' + desc_mode + ' al distrito ' + district.district_name;
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'La sucursal ' + district.branch_name + ' no pudo ser ' + desc_mode + ' al distrito ' + district.district_name;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

}
