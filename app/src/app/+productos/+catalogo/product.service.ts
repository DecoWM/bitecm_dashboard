import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {
  private url = '/api/admin/productos';

  constructor(
    private http: HttpClient
  ) {}

  getProducts() {
    return this.http
      .get(this.url);
  }

  getProduct(product_id) {
    return this.http
      .get(this.getUrl(product_id));
  }

  publishProduct(product_id) {
    return this.http
      .put(this.getUrl([product_id, 'publish']), {});
  }

  unpublishProduct(product_id) {
    return this.http
      .put(this.getUrl([product_id, 'hide']), {});
  }

  getCategories() {
    return this.http
      .get(this.getUrl('category'));
  }

  getBrands() {
    return this.http
      .get(this.getUrl('brand'));
  }

  getUrl(params: any = '') {
    let urlParts = [this.url];
    if (params.length) {
      if (typeof params === 'object') {
        urlParts = urlParts.concat(params);
      } else if (typeof params === 'string') {
        urlParts.push(params);
      }
    }
    return urlParts.join('/');
  }
}
