import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class MarcasService {
  private url = '/api/admin/marcas';

  constructor(
    private http: HttpClient
  ) {}

  getBrands() {
    return this.http
      .get(this.url);
  }

  getBrand(brand_id) {
    return this.http
      .get(this.getUrl(brand_id));
  }

  publishBrand(brand_id) {
    return this.http
      .put(this.getUrl([brand_id, 'publish']), {});
  }

  unpublishBrand(brand_id) {
    return this.http
      .put(this.getUrl([brand_id, 'hide']), {});
  }

  storeBrand(formData) {
    return this.http
      .post(this.url, formData);
  }
  
  updateBrand(brand_id_update, formData) {
    formData.append('_method', 'post');
    return this.http
      .post(this.getUrl(brand_id_update), formData);
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
