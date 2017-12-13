import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

import { AuthService } from './../../shared/auth/auth.service';

@Injectable()
export class OrdenesService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Cache-Control': 'no-cache',
    // 'Pragma': 'no-cache',
    // 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
  });

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
      .put(this.getUrl(id, 'item'), item);
  }

  deleteItem(id, item) {

  }

  getStatusList() {
    return this.http
      .get(this.getUrl(null, 'status'));
  }

  getStatusHistory(id) {
    return this.http
      .get(this.getUrl(id, 'status'));
  }

  createStatus(order_id, status) {
    return this.http
      .post(this.getUrl(order_id, 'status'), status);
  }

  getUrl(id = null, param = '') {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    if (param.length) {
      urlParts.push(param);
    }
    return urlParts.join('/');
  }

  formatTime(digitsTime) {
    let hours = digitsTime.slice(0, -2);
    const minutes = digitsTime.slice(-2);
    const meridian = hours > 12 ? 'pm' : 'am';
    if (hours > 12) { hours -= 12; }
    return `${hours}:${minutes} ${meridian}`;
  }

  fromSimpleDateToISO(simpleDate: string) {
    const dateParts = simpleDate.split('/');
    const date = new Date(`${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`);
    date.setDate(parseInt(dateParts[0], 10));
    date.setHours(0);
    return date.toISOString();
  }

  fromISOToSimpleDate(isoDate: string) {
    const date = new Date(isoDate);
    const {year, month, day} = {
      year: date.getFullYear(),
      month: ('0' + (date.getMonth() + 1)).slice(-2),
      day: ('0' + (date.getDate())).slice(-2)
    }
    return `${day}/${month}/${year}`;
  }
}
