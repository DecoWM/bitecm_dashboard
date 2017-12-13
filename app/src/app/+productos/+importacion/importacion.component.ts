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
  alert: any = null;

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
    this.alert = null;
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
          let mode, title;
          if (data.success) {
            mode = 'success';
            title = 'Completada';
          } else {
            mode = 'error';
            title = 'Fallida';
          }
          this.alert = {
            'title': title,
            'message': data.result,
            'mode': mode
          }
          this.blockui.stop('content');
        });
    }
  }

  importStockModels(): void {
    const fileBrowser = this.stockModelsFile.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('importFile', fileBrowser.files[0]);
      this.blockui.start('content');
      this.importacionService.importStockModelCodes(formData)
        .subscribe((data: any) => {
          console.log(data);
          let mode, title;
          if (data.success) {
            mode = 'success';
            title = 'Completada';
          } else {
            mode = 'error';
            title = 'Fallida';
          }
          this.alert = {
            'title': title,
            'message': data.result,
            'mode': mode
          }
          this.blockui.stop('content');
        });
    }
  }

  importProductVariations(): void {
    const fileBrowser = this.productVariationsFile.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('importFile', fileBrowser.files[0]);
      this.blockui.start('content');
      this.importacionService.importProductVariations(formData)
        .subscribe((data: any) => {
          console.log(data);
          let mode, title;
          if (data.success) {
            mode = 'success';
            title = 'Completada';
          } else {
            mode = 'error';
            title = 'Fallida';
          }
          this.alert = {
            'title': title,
            'message': data.result,
            'mode': mode
          }
          this.blockui.stop('content');
        });
    }
  }
}
