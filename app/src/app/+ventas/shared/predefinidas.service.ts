import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class PredefinidasService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private url = '/api/admin/predefinidas';

  constructor(private http: HttpClient) {}

  getPredefinidas() {
    return this.http
      .get(this.url, { headers: this.headers });
  }
  createPredefinida(predefinida) {
    return this.http
      .post(this.url, predefinida, { headers: this.headers });
  }

  getPredefinida(id) {
    return this.http
      .get(this.getUrl(id), { headers: this.headers });
  }

  updatePredefinida(predefinida) {
    return this.http
      .put(this.getUrl(predefinida._id), predefinida, { headers: this.headers });
  }

  deletePredefinida(id) {
    return this.http
      .delete(this.getUrl(id), { headers: this.headers });
  }

  getUrl(id = null) {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    return urlParts.join('/');
  }
}
