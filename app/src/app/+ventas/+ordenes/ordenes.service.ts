import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

import { AuthService } from './../../shared/auth/auth.service';

import * as moment from 'moment'

@Injectable()
export class OrdenesService {

  private url = '/api/admin/ordenes';
  private filter = [];
  private filters = [];
  private cursor = null;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  setFilter(filter) {
    this.filter = filter;
  }

  getFilter() {
    return this.filter;
  }

  setTextFilters(filters) {
    this.filters = filters;
  }

  getTextFilters() {
    return this.filters;
  }

  setCursor(cursor) {
    this.cursor = cursor;
  }

  getCursor() {
    return this.cursor;
  }

  getOrdenes(filters) {
    return this.http
      .post(this.getUrl('filter'), filters);
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

  saveStore(order_id, store_id) {
    return this.http
      .get(this.getUrl([order_id, store_id]));
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

  getWeekDateRange() {
    const now = moment();

    const startDate = now.isoWeekday(1).format('DD/MM/YYYY');
    const finishDate = now.isoWeekday(7).format('DD/MM/YYYY');
    const startTimestamp = now.isoWeekday(1).format('x');
    const finishTimestamp = now.isoWeekday(7).format('x');

    return {
      'startDate': startDate,
      'finishDate': finishDate,
      'startTimestamp': startTimestamp,
      'finishTimestamp': finishTimestamp
    };
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
