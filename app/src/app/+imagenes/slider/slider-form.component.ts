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
  selector: 'slider-form',
  templateUrl: './slider-form.component.html',
  styles: []
})
export class SliderFormComponent implements OnInit, AfterViewChecked {
  
  @Input() slidermodel: any = {
    image_id: null,
    image_name: null,
    image_description: null,
    image_url: null,
    image_link: null,
    active: null
  };
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('formSlider') formSliderModel;
  formValidate: any;

  sliderImageUrl: any = [];


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
    if (this.slidermodel.active === null) {
      this.slidermodel.active = false;
    }
    this.sliderImageUrl = [];
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
    this.sliderImageUrl[ix] = uploadedFiles[0].name;
  }

  save(e) {
    const formData = new FormData(document.forms
      .namedItem('form-slider-' + this.slidermodel.image_id + (this.slidermodel.slider_model_id ? this.slidermodel.slider_model_id : '')));
    if (this.formSliderModel.dirty || (formData.has('slider_images[]') && this.sliderImageUrl.length)) {
      if (!this.sliderImageUrl.length) {
        formData.delete('slider_images[]');
      }
      if (this.slidermodel.stock_model_id) {

      } else {

        formData.set('active', this.slidermodel.active ? '1' : '0');
        const type = 'slider-' + this.slidermodel.image_id;
        this.sliderModelService.saveImage(type, formData)
          .subscribe((data: any) => {
            this.onAlert.emit(this.getAlert(data));
            if (data.success) {
              this.sliderImageUrl = [];
              this.slidermodel.image_url = this.slidermodel.image_url + '?v' + (new Date().getTime().toString());
              
            // this.sliderModelService.getImage(data.id)
            //   .subscribe((smc: any) => {
            //     if (smc.success) {
            //       this.slidermodel = smc.result;
            //       this.slidermodel.slider_images.map((i, x) => {
            //         const img_url = i.product_image_url;
            //         const img_url_arr = img_url.split('/');
            //         i.product_image_name = img_url_arr[img_url_arr.length - 1];
            //         i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
            //         return i;
            //       });
            //     }
            //   });
            }
          });
      }
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
