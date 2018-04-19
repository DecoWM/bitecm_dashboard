import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class ChipService {
  private url = '/api/admin/productos/chip';

  constructor(
    private http: HttpClient
  ) {}

  getChip() {
    return this.http
      .get(this.url);
  }
}
