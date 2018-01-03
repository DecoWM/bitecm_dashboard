import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class VariationService {
  private url = '/api/admin/productos';

  constructor(
    private http: HttpClient
  ) {}

  getPrepaidVariations(product_id) {
    return this.http
      .get(this.getUrl([product_id, 'variation', 'prepaid']));
  }

  getPostpaidVariations(product_id) {
    return this.http
      .get(this.getUrl([product_id, 'variation', 'postpaid']));
  }

  savePrepaidVariations(product_id, variations) {
    return this.http
      .post(this.getUrl([product_id, 'variation', 'prepaid']), {
        'variation': variations
      });
  }

  updatePrepaidVariations(product_id, variations) {
    return this.http
      .post(this.getUrl([product_id, 'variation', 'prepaid']), {
        'variation': variations,
        '_method': 'put'
      });
  }

  savePostpaidVariations(product_id, variations, affiliation_id, contract_id) {
    return this.http
      .post(this.getUrl([product_id, 'variation', 'postpaid']), {
        'variation': variations,
        'affiliation_id': affiliation_id,
        'contract_id': contract_id
      });
  }

  updatePostpaidVariations(product_id, variations) {
    return this.http
      .post(this.getUrl([product_id, 'variation', 'postpaid']), {
        'variation': variations,
        '_method': 'put'
      });
  }

  getPrepaidPlans() {
    return this.http
      .get('/api/admin/plan/prepago');
  }

  getPostpaidPlans() {
    return this.http
      .get('/api/admin/plan/postpago');
  }

  getAffiliations() {
    return this.http
      .get('/api/admin/affiliation');
  }

  getContracts() {
     return this.http
      .get('/api/admin/contract');
  }

  getUrl(params: any = '') {
    let urlParts = [this.url];
    if (params.length) {
      if (typeof params === 'object') {
        urlParts = urlParts.concat(params);
      } else {
        urlParts.push(params);
      }
    }
    return urlParts.join('/');
  }
}
