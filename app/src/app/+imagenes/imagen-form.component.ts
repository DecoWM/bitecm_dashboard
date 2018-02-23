import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ImagenesService } from './imagenes.service';
import { NotificationService } from '../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'imagen-form',
  templateUrl: './imagen-form.component.html',
  styles: []
})
export class ImagenFormComponent implements OnInit, AfterViewChecked {
  @Input() imagen: any = {
    image_id: null,
    image_name: null,
    image_description: null,
    image_url: null,
    imagem_url: null,
    image_demo: null,
    image_link: null,
    active: null
  };
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('formImagen') formImagen;
  formValidate: any;

  imagenUrl = '';
  imagenmUrl = '';

  validationOptions = {
    rules: {
      image_link : {
        required : true
      }
    },
    messages : {
      image_link : {
        required : 'Debes ingresar un link'
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private imagenesService: ImagenesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    if (this.imagen.active === null) {
      this.imagen.active = '';
    }
    this.imagenUrl = '';
    this.imagenmUrl = '';
  }

  ngAfterViewChecked() {}

  onValidationSuccess(e) {
    this.save(e);
  }

  referenceValidator(formValidate) {
    this.formValidate = formValidate;
  }

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  changeFilenameW(event) {
    const uploadedFiles = event.target.files;
    this.imagenUrl = uploadedFiles[0].name;
  }

  changeFilenameM(event) {
    const uploadedFiles = event.target.files;
    this.imagenmUrl = uploadedFiles[0].name;
  }

  save(e) {
    const formData = new FormData(document.forms.namedItem('form-imagen' + this.imagen.image_id));
    if (this.formImagen.dirty || (formData.has('image_file') && this.imagenUrl.length)) {
      if (!this.imagenUrl.length) {
        formData.delete('image_file');
      }
      formData.set('active', this.imagen.active ? '1' : '0');
      this.blockui.start('content');
      this.imagenesService.updateImage(this.imagen.image_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data));
          if (data.success) {
            this.imagenUrl = '';
            if (data.image_url) {
              this.imagen.image_url = data.image_url + '?v' + (new Date().getTime().toString());
            }
          }
          this.blockui.stop('content');
        });
    }
    
    if (this.formImagen.dirty || (formData.has('imagem_file') && this.imagenmUrl.length)) {
      if (!this.imagenmUrl.length) {
        formData.delete('imagem_file');
      }
      formData.set('active', this.imagen.active ? '1' : '0');
      this.blockui.start('content');
      this.imagenesService.updateImage(this.imagen.image_id, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data));
          if (data.success) {
            this.imagenmUrl = '';
            if (data.imagem_url) {
              this.imagen.imagem_url = data.imagem_url + '?v' + (new Date().getTime().toString());
            }
          }
          this.blockui.stop('content');
        });
    }

  }

  getAlert(result): any {
    let mode, title, message;
    if (result.success) {
      mode = 'success';
      title = 'Éxito!';
      message = result.result;
    } else {
      mode = 'danger';
      title = 'Error';
      message = result.result;
    }
    return {
      'title': title,
      'message': message,
      'mode': mode
    }
  }
}
