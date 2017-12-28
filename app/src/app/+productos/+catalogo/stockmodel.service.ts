import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class StockModelService {
  private url = '/api/admin/importar';

  constructor(
    private http: HttpClient
  ) {}

  getUrl(param = '') {
    const urlParts = [this.url];
    if (param.length) {
      urlParts.push(param);
    }
    return urlParts.join('/');
  }
}
