import { Component, OnInit, Type, Input, Output, ViewChild, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ImagenesService } from './imagenes.service';
import { NotificationService } from '../shared/utils/notification.service';

import { ModalDirective } from 'ngx-bootstrap';
import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'imagenes-tabfox',
  templateUrl: './imagenes-tabfox.component.html',
  styles: []
})
export class ImagenesTabFoxComponent implements OnInit {
  imagenes: any = [];
  @Input() type: any = null;
  @Output() onAlert: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private imagenesService: ImagenesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    if (this.type) {
      this.blockui.start('content');
      this.imagenesService.getImages(this.type)
        .subscribe((imagenes: any) => {
          if (imagenes.success) {
            this.imagenes = imagenes.result;
          }
          this.blockui.stop('content');
        });
    }
  }

  printAlert(alert) {
    this.onAlert.emit(alert);
  }
}
