import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'bannermodel-form',
  templateUrl: './bannermodel-form.component.html',
  styles: []
})
export class BannerModelFormComponent implements OnInit, AfterViewChecked {
  
  bannerImageUrl: any = [];
  

  ngOnInit() {
    this.bannerImageUrl = [];
  }

  ngAfterViewChecked() {}

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  changeFilename(event, ix) {
    const uploadedFiles = event.target.files;
    this.bannerImageUrl[ix] = uploadedFiles[0].name;
  }
  
}
