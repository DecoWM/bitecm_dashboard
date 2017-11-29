import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../../shared/auth/auth.service';

@Injectable()
export class AgenciasService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private url = '/api/admin/agencias';

  constructor(
    private http: HttpClient,
    private authService: AuthService) {}

  getAgencias() {
    return this.http
      .get(this.url, { headers: this.headers });
  }

  getDetalleAgencia(agencia_id) {
    return this.http
      .get(this.getUrl(agencia_id), { headers: this.headers });
  }

  getDetalleMiAgencia() {
    const agencia_id = this.authService.agencia._id;
    return this.getDetalleAgencia(agencia_id);
  }

  updateAgencia(agencia) {
    return this.http
      .put(this.getUrl(agencia._id), agencia, { headers: this.headers });
  }

  getUrl(id = null) {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    return urlParts.join('/');
  }
}
