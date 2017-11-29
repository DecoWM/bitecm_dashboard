import { AuthService } from './../../shared/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ItinerariosService } from './itinerarios.service';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class ActividadesService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private url = '/api/admin/actividades';

  constructor(
    private http: HttpClient,
    private itinerariosService: ItinerariosService,
    private authService: AuthService
  ) {}

  getActividades(itinerario_id) {
    return this.http
      .get(this.getParentUrl(itinerario_id), { headers: this.headers });
  }

  createActividad(actividad) {
    return this.http
      .post(this.getParentUrl(actividad.itinerario), actividad, { headers: this.headers });
  }

  getActividad(id) {
    return this.http
      .get(this.getUrl(id), { headers: this.headers });
  }

  updateActividad(actividad) {
    return this.http
      .put(this.getUrl(actividad._id), actividad, { headers: this.headers });
  }

  deleteActividad(id) {
    return this.http
      .delete(this.getUrl(id), { headers: this.headers });
  }

  getUrl(id = null) {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    return urlParts.join('/');
  }

  getParentUrl(id = null) {
    const urlParts = [this.itinerariosService.getUrl(id), 'actividades'];
    return urlParts.join('/');
  }
}
