import { Component, OnInit, Type, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { NotificationService } from '../../../shared/utils/notification.service';

import { BlockUIService } from 'ng-block-ui';

declare var $: any;

@Component({
  selector: 'postpago-form',
  templateUrl: './postpago-form.component.html',
  styles: []
})
export class PostpagoFormComponent implements OnInit {
  @Input() variation: any = {};
  @Output() onValidation: EventEmitter<any> = new EventEmitter();
  @ViewChild('formPrepago') formPrepago;

  validationOptions = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  onValidationSuccess(e) {
    this.onValidation.emit(this.formPrepago.value);
  }
}
