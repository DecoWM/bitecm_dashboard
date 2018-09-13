import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class SucursalesService {
  private url = '/api/admin/sucursales';

  constructor(
    private http: HttpClient
  ) {}

  getBranches() {
    return this.http
      .get(this.url);
  }

  getBranch(branch_id) {
    return this.http
      .get(this.getUrl(branch_id));
  }

  publishBranch(branch_id) {
    return this.http
      .put(this.getUrl([branch_id, 'publish']), {});
  }

  unpublishBranch(branch_id) {
    return this.http
      .put(this.getUrl([branch_id, 'hide']), {});
  }

  storeBranch(formData) {
    return this.http
      .post(this.url, formData);
  }
  
  updateBranch(branch_id_update, formData) {
    formData.append('_method', 'post');
    return this.http
      .post(this.getUrl(branch_id_update), formData);
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
