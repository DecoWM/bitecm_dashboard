import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class StockModelService {
  private url = '/api/admin/productos';

  constructor(
    private http: HttpClient
  ) {}

  getColors() {
    return this.http
      .get(this.getUrl('color'));
  }

  saveColor(color) {
    const formData = new FormData();
    formData.append('color_name', color.color_name);
    formData.append('color_hexcode', color.color_hexcode);
    return this.http
      .post(this.getUrl('color'), formData);
  }

  getStockModels(product_id) {
    return this.http
      .get(this.getUrl([product_id, 'smc']));
  }

  

  getUrl(params: any = '') {
    let urlParts = [this.url];
    if (params.toString().length) {
      if (params instanceof Array) {
        urlParts = urlParts.concat(params);
      } else {
        urlParts.push(params);
      }
    }
    return urlParts.join('/');
  }
}
