import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class ContratosService {
  private url = '/api/admin/contratos';

  constructor(
    private http: HttpClient
  ) {}

  getContracts() {
    return this.http
      .get(this.url);
  }

  getContract(contract_id) {
    return this.http
      .get(this.getUrl(contract_id));
  }

  /*
  getAffiliationsPlan() {
    return this.http
      // .get(this.getUrl(product_id));
      .get(this.getUrl('affiliation'));
      // .get(this.getUrl([product_id, 'getAffiliationsPlan']), {});
  }

  getInformacionComercialPorPlan(plan_id) {
      return this.http
      .get(this.getUrl([plan_id, 'getInformacionComercialPorPlan']), {});
  }

 // actualizar los datos de una informacion adicional del plan
  savePlanInfoComercial(plan_infocomercial_id, formData) {
    formData.append('_method', 'put');
    return this.http
      .post(this.getUrl(plan_infocomercial_id), formData);
  }

 // insertar una nueva informacion adicional del plan
  insertarPlanInfoComercial(plan_id, formData2) {
    formData2.append('_method', 'post');
    return this.http
      .post(this.getUrl(plan_id), formData2);
  }
  */

  publishContract(contract_id) {
    return this.http
      .put(this.getUrl([contract_id, 'publish']), {});
  }

  unpublishContract(contract_id) {
    return this.http
      .put(this.getUrl([contract_id, 'hide']), {});
  }

  /*
  unpublishProductInfoComercial(plan_infocomercial_id) {
    return this.http
      .put(this.getUrl([plan_infocomercial_id, 'hideinfocomercial']), {});
  }

  publishProductInfoComercial(plan_infocomercial_id) {
    return this.http
      .put(this.getUrl([plan_infocomercial_id, 'publishinfocomercial']), {});
  }

  getVariations() {
    return this.http
      .get(this.getUrl('variation'));
  }

  getCategories() {
    return this.http
      .get(this.getUrl('category'));
  }

  getBrands() {
    return this.http
      .get(this.getUrl('brand'));
  }
  */

  storeContract(formData) {
    return this.http
      .post(this.url, formData);
  }
  
  updateContract(contract_id_update, formData) {
    formData.append('_method', 'post');
    return this.http
      .post(this.getUrl(contract_id_update), formData);
  }

  /*
  updateBasic(product_id, formData) {
    formData.append('_method', 'put');
    return this.http
      .post(this.getUrl(product_id), formData);
  }*/

  /*
  updateSpecs(product_id, formData) {
    formData.append('_method', 'put');
    return this.http
      .post(this.getUrl([product_id, 'specifications']), formData);
  }
  */

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
