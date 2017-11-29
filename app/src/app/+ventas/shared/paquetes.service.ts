import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class PaquetesService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Cache-Control': 'no-cache',
    // 'Pragma': 'no-cache',
    // 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
  });
  private url = '/api/admin/paquetes';

  constructor(private http: HttpClient) {}

  getPaquetes(all = false) {
    return this.http.get(this.url, { headers: this.headers });
  }

  createPaquete(paquete) {
    return this.http.post(this.url, paquete, { headers: this.headers });
  }

  getPaquete(id) {
    return this.http.get(this.getUrl(id), { headers: this.headers });
  }

  updatePaquete(paquete) {
    return this.http.put(this.getUrl(paquete._id), paquete, { headers: this.headers });
  }

  deletePaquete(id) {
    return this.http.delete(this.getUrl(id), { headers: this.headers });
  }

  getUrl(id = null) {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    return urlParts.join('/');
  }
}
