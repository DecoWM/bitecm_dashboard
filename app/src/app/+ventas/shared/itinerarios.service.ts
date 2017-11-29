import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Subject, Observable } from 'rxjs/Rx';

import { AuthService } from './../../shared/auth/auth.service';

@Injectable()
export class ItinerariosService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Cache-Control': 'no-cache',
    // 'Pragma': 'no-cache',
    // 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
  });

  private url = '/api/admin/itinerarios';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getItinerarios() {
    return this.http
      .get(this.url, { headers: this.headers });
  }

  createItinerario(itinerario) {
    return this.http
      .post(this.url, itinerario, { headers: this.headers });
  }

  getItinerario(id, populate = false) {
    return this.http
      .get(this.getUrl(id), { headers: this.headers });
  }

  updateItinerario(itinerario) {
    return this.http
      .put(this.getUrl(itinerario._id), itinerario, { headers: this.headers });
  }

  deleteItinerario(id) {
    return this.http
      .delete(this.getUrl(id), { headers: this.headers });
  }

  generateUID() {
    let firstPart: any = (Math.random() * 46656) | 0;
    let secondPart: any = (Math.random() * 46656) | 0;
    firstPart = ('000' + firstPart.toString(36).toUpperCase()).slice(-3);
    secondPart = ('000' + secondPart.toString(36).toUpperCase()).slice(-3);
    return firstPart + secondPart;
  }

  getUrl(id = null, params = {}) {
    const urlParts = [this.url];
    if (id) {
      urlParts.push(id);
    }
    return urlParts.join('/');
  }

  formatTime(digitsTime) {
    let hours = digitsTime.slice(0, -2);
    const minutes = digitsTime.slice(-2);
    const meridian = hours > 12 ? 'pm' : 'am';
    if (hours > 12) { hours -= 12; }
    return `${hours}:${minutes} ${meridian}`;
  }

  fromSimpleDateToISO(simpleDate: string) {
    const dateParts = simpleDate.split('/');
    const date = new Date(`${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`);
    date.setDate(parseInt(dateParts[0], 10));
    date.setHours(0);
    return date.toISOString();
  }

  fromISOToSimpleDate(isoDate: string) {
    const date = new Date(isoDate);
    const {year, month, day} = {
      year: date.getFullYear(),
      month: ('0' + (date.getMonth() + 1)).slice(-2),
      day: ('0' + (date.getDate())).slice(-2)
    }
    return `${day}/${month}/${year}`;
  }
}
