import { Component, OnInit, Type, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ImagenesService } from './imagenes.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'imagenes',
  templateUrl: './imagenes.component.html',
  styles: []
})
export class ImagenesComponent implements OnInit {
  alert: any = null;
  active: any = null;
  
  ngOnInit() {
    this.alert = null;
    this.active = 'tab-r1';
  }

  getAlert(data): any {
    let mode, title;
    if (data.success) {
      mode = 'success';
      title = 'Completada';
    } else {
      mode = 'danger';
      title = 'Fallida';
    }
    return {
      'title': title,
      'message': data.result,
      'mode': mode
    }
  }
}
