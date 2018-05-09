import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfig {
  static settings: any = {};
  static load() {
    const self = this;
    const url = '/api/config/public';
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.overrideMimeType('application/json');
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            self.settings = JSON.parse(xhr.responseText);
            console.log(JSON.parse(xhr.responseText));
            resolve();
          } else {
            reject(`Could not load config file: ${xhr.status}`);
          }
        }
      };
      xhr.send(null);
    });
  }
}