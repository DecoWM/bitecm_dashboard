import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

import { AuthService } from './../../shared/auth/auth.service';

@Injectable()
export class OrdenesService {

  private url = '/api/admin/ordenes';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getOrdenes() {
    return this.http
      .get(this.url);
  }

  getOrden(id) {
    return this.http
      .get(this.getUrl(id));
  }

  getOrdenSimple(id) {
    return this.http
      .get(this.getUrl([id, 'simple']));
  }

  updateOrden(orden) {
    return this.http
      .put(this.getUrl(orden.order_id), orden);
  }

  deleteOrden(id) {
    return this.http
      .delete(this.getUrl(id));
  }

  createItem(id, item) {

  }

  updateItem(id, item) {
    return this.http
      .put(this.getUrl([id, 'item']), item);
  }

  deleteItem(id, item) {

  }

  getStatusList() {
    return this.http
      .get(this.getUrl('status'));
  }

  getStatusHistory(id) {
    return this.http
      .get(this.getUrl([id, 'status']));
  }

  createStatus(order_id, status) {
    return this.http
      .post(this.getUrl([order_id, 'status']), status);
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
