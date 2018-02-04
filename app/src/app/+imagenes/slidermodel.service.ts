import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class SliderModelService {
  private url = '/api/admin/images';

  constructor(
    private http: HttpClient
  ) {}

  getImage(image_id) {
    return this.http
      .get(this.getUrl([image_id]));
  }

  saveImage(type, formData) {
    return this.http
      .post(this.getUrl([type]), formData);
  }

  updateImage(image_id, formData) {
    return this.http
      .post(this.getUrl(image_id), formData);
  }

  getImages(type) {
    return this.http
      .get(this.getUrl([type]));
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
