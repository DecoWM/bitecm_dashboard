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
  selector: 'banner-form',
  templateUrl: './bannermodel-form.component.html',
  styles: []
})
export class BannerModelFormComponent implements OnInit, AfterViewChecked {
  
  @Input() bannermodel: any = {
    image_id: null,
    image_name: null,
    image_description: null,
    image_url: null,
    image_demo: null,
    image_link: null,
    active: null
  };
  @Output() onAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('formBanner') formBanner;
  formValidate: any;

  bannerImageUrl: any = [];


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
    if (this.bannermodel.active === null) {
      this.bannermodel.active = false;
    }

    this.bannermodel.image_demo = this.bannermodel.image_demo.replace('rutademo', 'images//banner-demo-' + this.bannermodel.image_id+ '.png');
    this.bannerImageUrl = [];
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
    this.bannerImageUrl[ix] = uploadedFiles[0].name;
  }

  save(e) {
    const formData = new FormData(document.forms
      .namedItem('form-banner-' + this.bannermodel.image_id + (this.bannermodel.slider_model_id ? this.bannermodel.slider_model_id : '')));
    if (this.formBanner.dirty || (formData.has('slider_images[]') && this.bannerImageUrl.length)) {
      if (!this.bannerImageUrl.length) {
        formData.delete('slider_images[]');
      }
      if (this.bannermodel.stock_model_id) {

      } else {

        //formData.set('active', this.homemodel.active ? '1' : '0');
        formData.set('active', '1');
        const type = 'banner-' + this.bannermodel.image_id;
        this.sliderModelService.saveImage(type, formData)
          .subscribe((data: any) => {
            this.onAlert.emit(this.getAlert(data));
            if (data.success) {
              this.bannerImageUrl = [];
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