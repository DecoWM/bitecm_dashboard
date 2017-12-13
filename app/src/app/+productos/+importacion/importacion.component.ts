import { Component, OnInit, Type, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ImportacionService } from './importacion.service';

import { BlockUIService } from 'ng-block-ui';

@Component({
  selector: 'ordenes',
  templateUrl: './importacion.component.html',
  styles: []
})
export class ImportacionComponent implements OnInit {
  @ViewChild('productsFile') productsFile;
  @ViewChild('stockModelsFile') stockModelsFile;
  @ViewChild('productVariationsFile') productVariationsFile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private importacionService: ImportacionService
  ) { }

  ngOnInit() {

  }

  importProducts(): void {
    const fileBrowser = this.productsFile.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('importFile', fileBrowser.files[0]);
      this.blockui.start('content');
      this.importacionService.importProducts(formData)
        .subscribe((data: any) => {
          console.log(data);
          if (data.success) {
            console.log(data.result);
          } else {

          }
          this.blockui.stop('content');
        });
    }
  }

}
