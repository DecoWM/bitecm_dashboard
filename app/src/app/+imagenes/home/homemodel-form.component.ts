import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SliderModelService } from './../slidermodel.service';
import { NotificationService } from '../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'home-form',
  templateUrl: './homemodel-form.component.html',
  styles: []
})
export class HomeModelFormComponent implements OnInit, AfterViewChecked {
  @Input() homemodel: any = {
    image_id: null,
    image_name: null,
    image_description: null,
    image_url: null,
    image_demo: null,
    image_link: null,
    active: null
  };
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('formHome') formHome;
  formValidate: any;

  homeImageUrl: any = [];

  validationOptions = {
    rules: {
      slider_link : {
        required : true
      }
    },
    messages : {
      slider_link : {
        required : 'Debes ingresar un link'
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private sliderModelService: SliderModelService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    if (this.homemodel.active === null) {
      this.homemodel.active = false;
    }
    this.homemodel.image_demo = this.homemodel.image_demo.replace('rutademo', 'images/home-demo-' + this.homemodel.image_id + '.png');
    this.homeImageUrl = [];
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

  changeFilename(event, ix) {
    const uploadedFiles = event.target.files;
    this.homeImageUrl[ix] = uploadedFiles[0].name;
  }

  save(e) {
    const formData = new FormData(document.forms
      .namedItem('form-home-' + this.homemodel.image_id + (this.homemodel.slider_model_id ? this.homemodel.slider_model_id : '')));
    if (this.formHome.dirty || (formData.has('slider_images[]') && this.homeImageUrl.length)) {
      if (!this.homeImageUrl.length) {
        formData.delete('slider_images[]');
      }
      // formData.set('active', this.homemodel.active ? '1' : '0');
      formData.set('active', '1');
      const type = 'home-' + this.homemodel.image_id;
      this.blockui.start('content');
      this.sliderModelService.saveImage(type, formData)
        .subscribe((data: any) => {
          this.onAlert.emit(this.getAlert(data));
          if (data.success) {
            this.homeImageUrl = [];
            this.homemodel.image_url = this.homemodel.image_url + '?v' + (new Date().getTime().toString());
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
