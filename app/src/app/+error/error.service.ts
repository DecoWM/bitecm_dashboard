import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ErrorService {

  constructor(
    private router: Router
  ) {
  }

  notFound() {
    return null;
  }
}
