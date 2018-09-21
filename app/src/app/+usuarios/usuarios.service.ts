import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class UsuariosService {
  private url = '/api/admin/usuarios';

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http
      .get(this.url);
  }

  getUser(id) {
    return this.http
      .get(this.getUrl(id));
  }

  publishUser(id) {
    return this.http
      .put(this.getUrl([id, 'publish']), {});
  }

  unpublishUser(id) {
    return this.http
      .put(this.getUrl([id, 'hide']), {});
  }

  storeUser(formData) {
    return this.http
      .post(this.url, formData);
  }
  
  updateUser(id_update, formData) {
    formData.append('_method', 'post');
    return this.http
      .post(this.getUrl(id_update), formData);
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
