import { Component, OnInit, AfterViewChecked, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'homemodel-form',
  templateUrl: './homemodel-form.component.html',
  styles: []
})
export class HomeModelFormComponent implements OnInit, AfterViewChecked {
  
  homeImageUrl: any = [];

  ngOnInit() {
    this.homeImageUrl = [];
  }

  ngAfterViewChecked() {}

  onSelectChange(event) {
    $(event.currentTarget).blur();
  }

  changeFilename(event, ix) {
    const uploadedFiles = event.target.files;
    this.homeImageUrl[ix] = uploadedFiles[0].name;
  }
  
}
