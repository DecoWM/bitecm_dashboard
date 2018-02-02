import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

import { AuthService } from './../../shared/auth/auth.service';

@Injectable()
export class ReportesService {

  private url = '/api/admin/ordenes/reportes';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  exportGeneralSales(formData) {
    return this.http
      .post(this.getUrl('general_sales'), formData);
  }

  exportBestSellers(formData) {
    return this.http
      .post(this.getUrl('best_sellers'), formData);
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
