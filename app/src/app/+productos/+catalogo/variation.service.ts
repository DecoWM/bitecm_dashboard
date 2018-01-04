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

  getPostpaidVariations(product_id, affiliation_id, contract_id) {
    return this.http
      .get(this.getUrl([product_id, 'variation', 'postpaid', affiliation_id, contract_id]));
  }

  savePrepaidVariations(product_id, variations) {
    if (!variations.length) {
      return Observable.of({ nop: true, success: false });
    }
    const formData = new FormData();
    formData.append('variation', JSON.stringify(variations));
    return this.http
      .post(this.getUrl([product_id, 'variation', 'prepaid']), formData);
  }

  updatePrepaidVariations(product_id, variations) {
    if (!variations.length) {
      return Observable.of({ nop: true, success: false });
    }
    const formData = new FormData();
    formData.append('variation', JSON.stringify(variations));
    formData.append('_method', 'put');
    return this.http
      .post(this.getUrl([product_id, 'variation', 'prepaid']), formData);
  }

  savePostpaidVariations(product_id, variations, affiliation_id, contract_id) {
    if (!variations.length) {
      return Observable.of({ nop: true, success: false });
    }
    const formData = new FormData();
    formData.append('variation', JSON.stringify(variations));
    formData.append('affiliation_id', affiliation_id);
    formData.append('contract_id', contract_id);
    return this.http
      .post(this.getUrl([product_id, 'variation', 'postpaid']), formData);
  }

  updatePostpaidVariations(product_id, variations) {
    if (!variations.length) {
      return Observable.of({ nop: true, success: false });
    }
    const formData = new FormData();
    formData.append('variation', JSON.stringify(variations));
    formData.append('_method', 'put');
    return this.http
      .post(this.getUrl([product_id, 'variation', 'postpaid']), formData);
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
