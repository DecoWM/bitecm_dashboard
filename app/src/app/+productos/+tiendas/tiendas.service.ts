import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class TiendasService {
  private url = '/api/admin/tiendas';

  constructor(
    private http: HttpClient
  ) {}

  getStores() {
    return this.http
      .get(this.url);
  }

  getBranches() {
    return this.http
      .get(this.getUrl('branches'));
  }

  getStore(store_id) {
    return this.http
      .get(this.getUrl(store_id));
  }

  publishStore(store_id) {
    return this.http
      .put(this.getUrl([store_id, 'publish']), {});
  }

  unpublishStore(store_id) {
    return this.http
      .put(this.getUrl([store_id, 'hide']), {});
  }

  storeStore(formData) {
    return this.http
      .post(this.url, formData);
  }
  
  updateStore(store_id_update, formData) {
    formData.append('_method', 'post');
    return this.http
      .post(this.getUrl(store_id_update), formData);
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
