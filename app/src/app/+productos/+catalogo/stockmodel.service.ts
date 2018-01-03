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

  getUrl(params: any = '') {
    let urlParts = [this.url];
    if (params.length) {
      if (typeof params === 'object') {
        urlParts = urlParts.concat(params);
      } else {
        urlParts.push(params);
      }
    }
    return urlParts.join('/');
  }
}
