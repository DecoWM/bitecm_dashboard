import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UsuariosService } from '../usuarios.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'usuario-basic',
  templateUrl: 'basic.component.html',
  styles: []
})
export class UsuarioBasicComponent implements OnInit {

  variations: any = [];

  userOptions = {
    rules: {
      user_dni : {
        required : true,
        number: true,
        minlength: 8,
        maxlength: 8
      },
      user_name : {
        required : true
      },
      user_email : {
        required : true
      },
      password : {
        required : true,
        minlength: 10,
        maxlength: 10
      },
      user_rol : {
        required : true,
        number: true
      }
    },
    messages : {
      user_dni : {
        required : 'Debes ingresar un numero de DNI.',
        number: 'Debes ingresar un número',
        minlength: 'Debe ingresar 8 números',
        maxlength: 'Debe ingresar 8 números'
      },
      user_name : {
        required : 'Debes ingresar un nombre de usuario.'
      },
      user_email : {
        required : 'Debes ingresar una cuenta de correo valida como usuario.'
      },
      password : {
        required : 'Debes ingresar un password.',
        minlength: 'Debe ingresar 10 caracteres (entre numeros y letras)',
        maxlength: 'Debe ingresar 10 caracteres (entre numeros y letras)'
      },
      user_rol : {
        required : 'Debes seleccionar un rol.',
        number: 'Debes ingresar un número'
      }
    }
  };

  @Input() user: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private userService: UsuariosService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
      const id = this.route.snapshot.params.id;
      if (id) {
        this.blockui.start('content');
        this.userService.getUser(id)
          .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            $('#user_rol').val(data.result.user_rol);
          }
          this.blockui.stop('content');
        });
      } else {
        this.blockui.stop('content');
      }
  }

  onValidationSuccess(e) {
    this.save(e);
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-basic'));
    this.blockui.start('content');
    if (this.user.id) {
      console.log('id:' + this.user.id);
      console.log(formData);
      this.userService.updateUser(this.user.id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.user, 'Actualización', 'actualizado'));
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
      this.userService.storeUser(formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data, this.user, 'Creación', 'creado'));
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

  getAlert(result, user, title_mode, desc_mode): any {
    let mode, title, message = '';
    if (result.success) {
      mode = 'success';
      title = title_mode + ' completada';
      message = result.result.length ? result.result : 'El usuario ' + user.user_name + ' ha sido ' + desc_mode;
    } 
    else {
      mode = 'danger';
      title = title_mode + ' fallida';
      message = result.result.length ? result.result : 'El usuario ' + user.user_name + ' no pudo ser ' + desc_mode;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

}
