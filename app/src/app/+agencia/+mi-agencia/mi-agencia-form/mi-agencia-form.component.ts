import { Component, OnInit } from '@angular/core';
import { AgenciasService } from './../../shared/agencias.service';
import { SkinService } from './../../../shared/layout/skin/skin.service';
import { AuthService } from './../../../shared/auth/auth.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable, Subject } from 'rxjs/Rx';
declare var $: any;

@Component({
  selector: 'app-mi-agencia-form',
  templateUrl: './mi-agencia-form.component.html',
  styles: []
})
export class MiAgenciaFormComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  blockContent: Subject<any> = new Subject();

  agencia: any = {};
  estilos: any = {};
  logo: string;
  statusVisible = false;
  statusMessage;

  validationOptions = {
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      nombre: {
        validators: {
          notEmpty: {
            message: 'Ingrese un nombre completo'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Ingrese un correo electrónico'
          },
          emailAddress: {
            message: 'Ingrese un correo electrónico válido'
          }
        }
      }
    }
  };

  private $form;

  constructor(
    private agenciaService: AgenciasService,
    private skin: SkinService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.blockUI.start('Cargando...');
    this.agenciaService.getDetalleMiAgencia()
      .subscribe((data: any) => {
        this.agencia = data.result;
        this.estilos = this.skin.extendStyles(this.agencia.estilos);
        this.skin.resetSkin(this.agencia);
        this.blockUI.stop();
        this.blockContent.next(true);
      });
  }

  onColorChange(event) {
    const color = event.value;
    const inputName = event.target.name;
    inputName.split('.').reduce((a, b) => {
      if (typeof a[b] === 'string') {
        a[b] = color;
      }
      return a[b];
    }, this.estilos);
    this.skin.previewStyles(this.estilos);
  }

  onCheckboxChange(event) {
    this.skin.previewStyles(this.estilos);
  }

  resetStyles() {
    this.estilos = this.skin.extendStyles(this.agencia.estilos);
    this.skin.previewStyles(this.estilos);
  }

  resetLogo() {
    this.logo = this.agencia.logo;
    this.skin.previewLogo(this.logo);
  }

  save() {
    this.blockUI.start('Cargando...');
    this.agencia.estilos = this.estilos;
    this.agenciaService.updateAgencia(this.agencia)
      .subscribe((data: any) => {
        if (data.success) {
          this.auth.agencia = this.agencia;
          // this.skin.resetSkin(this.agencia);
          this.statusMessage = data.message;
          this.statusVisible = true;
          this.$form.data('bootstrapValidator').resetForm();
        }
        this.blockUI.stop();
      });
  }

  onValidationSuccess(e) {
    this.$form = $(e.currentTarget);
    if (e.type === 'success') {
      this.save();
    }
  }

}
