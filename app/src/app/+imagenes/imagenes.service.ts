import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class ImagenesService {
  private url = '/api/admin/imagenes';

  constructor(
    private http: HttpClient
  ) {}

  getImage(image_id) {
    return this.http
      .get(this.getUrl(image_id));
  }

  updateImage(image_id, formData) {
    formData.append('_method', 'put');
    return this.http
      .post(this.getUrl(image_id), formData);
  }

  getImages(type) {
    return this.http
      .get(this.getUrl(type));
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
