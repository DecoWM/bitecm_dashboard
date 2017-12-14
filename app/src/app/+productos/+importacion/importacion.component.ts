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

  productsFilename = '';
  stockModelsFilename = '';
  productVariationsFilename = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blockui: BlockUIService,
    private importacionService: ImportacionService
  ) { }

  ngOnInit() {
    this.alert = null;
    this.productsFilename = '';
    this.stockModelsFilename = '';
    this.productVariationsFilename = '';
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
          this.alert = this.getAlert(data);
          this.productsFilename = '';
          this.blockui.stop('content');
        }, (error) => {
          this.productsFilename = '';
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
          this.alert = this.getAlert(data);
          this.stockModelsFilename = '';
          this.blockui.stop('content');
        }, (error) => {
          this.stockModelsFilename = '';
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
          this.alert = this.getAlert(data);
          this.productVariationsFilename = '';
          this.blockui.stop('content');
        }, (error) => {
          this.productVariationsFilename = '';
          this.blockui.stop('content');
        });
    }
  }

  changeFilename(event, i): void {
    const uploadedFiles = event.srcElement.files;
    switch (i) {
      case 1:
        this.productsFilename = uploadedFiles[0].name;
        break;
      case 2:
        this.stockModelsFilename = uploadedFiles[0].name;
        break;
      case 3:
        this.productVariationsFilename = uploadedFiles[0].name;
        break;
    }
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
