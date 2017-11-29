import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SubAgenciasService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private url = '/api/admin/subagencias';

  constructor(private http: HttpClient) {}

  getSubagencias() {
    return this.http
      .get(this.getUrl(), { headers: this.headers });
  }

  getUrl(id = null) {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    return urlParts.join('/');
  }
}
