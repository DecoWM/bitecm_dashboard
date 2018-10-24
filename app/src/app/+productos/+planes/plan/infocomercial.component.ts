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
  selector: 'plan-infocomercial',
  templateUrl: './infocomercial.component.html',
  styles: []
})
export class InfocomercialComponent implements OnInit {
  informacion_comercial: any = [];
  productImageUrl = '';
  loadingStatus: string;
  itemsObs: Subject<any> = new Subject();
  dtTrigger: Subject<any> = new Subject();
  alert: any = null;

  imagenUrl = '';

  @Input() plan: any = {};
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBasic') formBasic;
  @ViewChild('productImageInput') productImageInput;
  @ViewChild('formImagen') formImagen;
  @ViewChild('formInfoComercialInsert') formInfoComercialInsert;
  @ViewChild('formInfoComercialUpdate') formInfoComercialUpdate;

  formValidateUpdate: any;
  formValidateInsert: any;

  validationOptionsInsert = {
    rules: {
      image_file_insertar : {
        required : true
      },
      tipo_insertar : {
        required : true
      },
      descripcion_insertar : {
        required : true
      },
      informacion_adicional_insertar : {
        required : true
      },
      flag_cantidad_insertar : {
        required : true,
        number: true 
      },
      weight_insertar : {
        required : true,
        number: true 
      }
    },
    messages : {
      image_file_insertar : {
        required : 'Debes seleccionar una imagen'
      },
      tipo_insertar : {
        required : 'Debes seleccionar un tipo'
      },
      descripcion_insertar : {
        required : 'Debes ingresar una descripcion'
      },
      informacion_adicional_insertar : {
        required : 'Debes ingresar una información adicional'
      },
      flag_cantidad_insertar : {
        required : 'Debes ingresar un flag cantidad',
        number: 'Debes ingresar un número',
      },
      weight_insertar : {
        required : 'Debes ingresar un peso para el orden de presentación',
        number: 'Debes ingresar un número',
      }
    }
  };

  validationOptionsUpdate = {
    rules: {
      tipo : {
        required : true
      },
      descripcion : {
        required : true
      },
      informacion_adicional : {
        required : true
      },
      flag_cantidad : {
        required : true,
        number: true 
      },
      weight : {
        required : true,
        number: true 
      }
    },
    messages : {
      tipo : {
        required : 'Debes seleccionar un tipo'
      },
      descripcion : {
        required : 'Debes ingresar una descripcion'
      },
      informacion_adicional : {
        required : 'Debes ingresar una información adicional'
      },
      flag_cantidad : {
        required : 'Debes ingresar un flag cantidad',
        number: 'Debes ingresar un número',
      },
      weight : {
        required : 'Debes ingresar un peso para el orden de presentación',
        number: 'Debes ingresar un número',
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private planService: PlanService,
    private notificationService: NotificationService
  ) { }

  // -----------------------------------------------------
  // Inicializar los datos en el formulario o pantalla
  // -----------------------------------------------------
  ngOnInit() {
    this.productImageUrl = '';
    const plan_id = this.route.snapshot.params.id
    if (plan_id) {
      this.blockui.start('content');
      this.planService.getInformacionComercialPorPlan(plan_id)
        .subscribe((data: any) => {
          //console.log(data);
          this.blockui.stop('content');
          const items = data.result;
          this.itemsObs.next(items);
          if (items.length === 0) {
            this.loadingStatus = 'No se encontraron registros';
          }
        }, (error) => {
          this.blockui.stop('content');
          if (error.status === 401) {
          // this.authService.logout(true);
          }
        });
    } else {
       // this.subtitle = 'Nuevo producto';
    }
  }

  // -------------------------------------
  // Actualizar informacion comercial
  // -------------------------------------
  // mostrar los datos del modal
  detailInfoComercialModalEditar(item): void {
    $('#plan_id').val(this.route.snapshot.params.id);
    $('#plan_info_id').val(item.plan_infocomercial_id);

    var dato = $('#ftipo' + item.plan_infocomercial_id).text();
    var valor = 0;
    if(dato.trim() == 'Sin tipo'){
      valor = 0;
    }
    if(dato.trim() == 'App Ilimitada'){
      valor = 1;
    }
    if(dato.trim() == 'Megas Inter.'){
      valor = 2;
    }
    if(dato.trim() == 'Video y Musica'){
      valor = 3;
    }
    if(dato.trim() == 'Juegos'){
      valor = 4;
    }

    //$('#tipo').val($('#ftipo' + item.plan_infocomercial_id).text());
    $('#tipo').val(valor);
    
    $('#descripcion').val($('#fdescripcion' + item.plan_infocomercial_id).text());
    $('#informacion_adicional').val($('#finformacion_adicional' + item.plan_infocomercial_id).text());
    $('#flag_cantidad').val($('#fflag_cantidad' + item.plan_infocomercial_id).html());
    $('#weight').val($('#fweight' + item.plan_infocomercial_id).html());
    $('#imagen_icon').attr('src', $('#fimagen_icons' + item.plan_infocomercial_id).attr('src'));
    $('#myModalEditar').modal('show');
  }

  setValidationRefUpdate(formValidateUpdate) {
    this.formValidateUpdate = formValidateUpdate;
  }

  // Validar los inputs del formulario
  onValidationSuccessUpdate() {
    if (this.formValidateUpdate.valid()) {
      this.showModalEditarInformacionComercial();
    }
    else{
      var result = { danger: 'false' };
      this.onAlert.emit(this.getAlertSaveInformacionComercial(result, ''));
    }
  }

  // Validar la actualizacion de los datos
  showModalEditarInformacionComercial(): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Grabar 
        <span class="txt-color-orangeDark">
          <strong>` + $('#descripcion').val() + `</strong>
        </span>`,
      content : '¿Seguro que quieres grabar esta información comercial de este plan?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.saveInfoComercial();
      }
    });
  }

  // Captura la url de la imagen del modal
  changeFilenameUpdate(event) {
    const uploadedFiles = event.target.files;
    this.imagenUrl = uploadedFiles[0].name;
  }

  // Grabar los datos en base de datos y mostrar los cambios en pantalla
  saveInfoComercial() {
      const formData = new FormData(document.forms.namedItem('form-modal-update'));
      this.blockui.start('content');
      const plan_infocomercial_id = $('#plan_info_id').val();
      this.planService.savePlanInfoComercial(plan_infocomercial_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlertSaveInformacionComercial(data, data.descripcion));
          if (data.success) {

            var valor = '';
            if(data.tipo == 0){
              valor = 'Sin tipo';
            }
            if(data.tipo == 1){
              valor = 'App Ilimitada';
            }
            if(data.tipo == 2){
              valor = 'Megas Inter.';
            }
            if(data.tipo == 3){
              valor = 'Videos y Musica';
            }
            if(data.tipo == 4){
              valor = 'Juegos';
            }

            $('#ftipo' + plan_infocomercial_id).text(valor);
            //$('#ftipo' + plan_infocomercial_id).text(data.tipo);

            $('#fdescripcion' + plan_infocomercial_id).text(data.descripcion);
            $('#finformacion_adicional' + plan_infocomercial_id).text(data.informacion_adicional);
            $('#fflag_cantidad' + plan_infocomercial_id).html(data.flag_cantidad);
            $('#fweight' + plan_infocomercial_id).html(data.weight);
            // valida si la imagen que se carga es diferente a la que ya esta cargada
            if(data.img_infocomercial != $('#imagen_icon' + plan_infocomercial_id).attr('src')){
              $('#fimagen_icons' + plan_infocomercial_id).attr('src', data.img_infocomercial);
            }
          }
          this.blockui.stop('content');
        });
  }

  // Mostrar el mensaje al usuario
  getAlertSaveInformacionComercial(result, descripcion): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Proceso exitoso';
      message = 'La información comercial ' + descripcion + ' del plan ha sido actualizada';
    } else {
      mode = 'danger';
      title = 'Proceso fallido';
      message = 'La información comercial ' + descripcion + ' del plan no pudo ser actualizada';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  // ----------------------------------------
  // Ingresar nueva informacion comercial
  // ----------------------------------------
  // Mostrar los datos del modal
  detailInfoComercialModalNuevo(): void {
    $('#image_file_insertar').val(null);
    $('#tipo_insertar').val('');
    $('#descripcion_insertar').val('');
    $('#informacion_adicional_insertar').val('');
    $('#flag_cantidad_insertar').val(1);
    $('#weight_insertar').val(1);
    const plan_id = this.route.snapshot.params.id;
    $('#plan_id_insertar').val(plan_id);
    $('#myModalNuevo').modal('show');
  }

  // Captura la url de la imagen del modal
  changeFilenameInsert(event) {
    const uploadedFiles = event.target.files;
    this.imagenUrl = uploadedFiles[0].name;
  }

  setValidationRefInsert(formValidateInsert) {
    this.formValidateInsert = formValidateInsert;
  }

  // Validar los inputs del formulario
  onValidationSuccessInsert() {
    if (this.formValidateInsert.valid()) {
      this.showModalInsertarInformacionComercial();
    }
    else{
      var result = { danger: 'false' };
      this.onAlert.emit(this.getAlertSaveInsertarInformacionComercial(result, ''));
    }
  }

  // Confirmar la insercion de los datos
  showModalInsertarInformacionComercial(): void {
    $('#myModalEditar').modal('hide');
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Grabar 
        <span class="txt-color-orangeDark">
          <strong>` + $('#descripcion_insertar').val() + `</strong>
        </span>`,
      content : '¿Seguro que quieres grabar esta información comercial de este plan?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.saveInsertarInfoComercial();
      }
    });
  }

  // Grabar los datos en base de datos y mostrar los cambios en pantalla
  saveInsertarInfoComercial() {
    const formData = new FormData(document.forms.namedItem('form-modal-insert'));
    if (this.formInfoComercialInsert.dirty || (formData.has('image_file_insertar') && this.imagenUrl.length)) {
      if (!this.imagenUrl.length) {
        formData.delete('image_file_insertar');
      }
      const plan_id = $('#plan_id_insertar').val();
      this.planService.insertarPlanInfoComercial(plan_id, formData)
        .subscribe((res: any) => {
          this.onAlert.emit(this.getAlertSaveInsertarInformacionComercial(res, res.descripcion));
          if (res.success) {
            this.planService.getInformacionComercialPorPlan(plan_id)
            .subscribe((data: any) => {
                const items = data.result;
                this.itemsObs.next(items);
            }, (error) => {
              console.log(error);
              if (error.status === 401) {
              }
          });
        }
      });
    }
    else{
      var result = { danger: 'false' };
      this.onAlert.emit(this.getAlertSaveInsertarInformacionComercial(result, ''));
    }
  }

  // Mostrar el mensaje al usuario
  getAlertSaveInsertarInformacionComercial(result, descripcion): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Proceso exitoso';
      message = 'La información comercial ' + descripcion + ' del plan ha sido registrada';
    } else {
      mode = 'danger';
      title = 'Proceso fallido';
      message = 'La información comercial ' + descripcion + ' del plan no pudo ser registrada';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  // -----------------------------------
  // Activar informacion comercial
  // -----------------------------------
  showPopupPublishInfoComercial(product: any): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Activar 
        <span class="txt-color-orangeDark">
          <strong>${product.plan_infocomercial_descripcion}</strong>
        </span>`,
      content : '¿Seguro que quieres activar esta información comercial de este plan?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.publishInfoComercial(product);
      }
    });
  }

  publishInfoComercial(product: any): void {
    this.blockui.start('content');
    this.planService.publishProductInfoComercial(product.plan_infocomercial_id)
      .subscribe((res: any) => {
        if (res.success) {
          product.active = 1;
          this.onAlert.emit(this.getAlertPublish(res, product));
        }
        this.blockui.stop('content');
      });
  }

  getAlertPublish(result, product): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Activación completada';
      message = 'La información comercial del plan ' + product.plan_infocomercial_descripcion + ' ha sido activado';
    } else {
      mode = 'danger';
      title = 'Publicación fallida';
      message = 'La información comercial del plan ' + product.plan_infocomercial_descripcion + ' no pudo ser activado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  // -----------------------------------
  // Desactivar informacion comercial
  // -----------------------------------
  showPopupUnpublishInfoComercial(product: any): void {
    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Desactivar 
        <span class="txt-color-orangeDark">
          <strong>${product.plan_infocomercial_descripcion}</strong>
        </span>`,
      content : '¿Seguro que quieres desactivar esta información comercial del plan?.',
      buttons : '[No][Si]'
    }, (ButtonPressed) => {
      if (ButtonPressed === 'Si') {
        this.unpublishInfoComercial(product);
      }
    });
  }

  unpublishInfoComercial(product: any): void {
    this.blockui.start('content');
    this.planService.unpublishProductInfoComercial(product.plan_infocomercial_id)
      .subscribe((res: any) => {
        if (res.success) {
          product.active = 0;
          this.onAlert.emit(this.getAlertUnpublish(res, product));
        }
        this.blockui.stop('content');
      });
  }

  getAlertUnpublish(result, product): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Desactivación completada';
      message = 'La información comercial del plan ' + product.plan_infocomercial_descripcion + ' ha sido desactivado';
    } else {
      mode = 'danger';
      title = 'Despublicación fallida';
      message = 'La información comercial del plan ' + product.plan_infocomercial_descripcion + ' no pudo ser desactivado';
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }

  printAlert(alert): void {
    if (alert && !(alert instanceof Array)) {
      alert = [alert];
    }
    this.alert = alert;
  }
}
