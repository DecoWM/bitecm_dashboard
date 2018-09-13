import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class DistritosService {
  private url = '/api/admin/distritos';

  constructor(
    private http: HttpClient
  ) {}

  getDistricts() {
    return this.http
      .get(this.url);
  }

  getDepartments() {
    return this.http
      .get(this.getUrl('departments'));
  }

  getBranches() {
    return this.http
      .get(this.getUrl('branches'));
  }

  getProvinces(departament_id) {
    return this.http
      .get(this.getUrl(departament_id));
  }

  getDistrictsByProvince(province_id) {
    console.log("entro en el servicio");
    return this.http
      .get(this.getUrl([province_id, 'getDistrictsByProvince']), {});
  }

  getDistrict(district_id) {
    return this.http
      .get(this.getUrl(district_id));
  }

  publishDistrict(district_id) {
    return this.http
      .put(this.getUrl([district_id, 'publish']), {});
  }

  unpublishDistrict(district_id) {
    return this.http
      .put(this.getUrl([district_id, 'hide']), {});
  }

  updateDistrict(formData) {
    return this.http
      .post(this.url, formData);
  }
  
  /*
  updateDistrict(district_id_update, formData) {
    formData.append('_method', 'post');
    return this.http
      .post(this.getUrl(district_id_update), formData);
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
