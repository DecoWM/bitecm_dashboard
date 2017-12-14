import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';
import { AuthService } from './../shared/auth/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private inj: Injector,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthService);
    return next
      .handle(req)
      .map(event => {
        // console.log(event);
        if (event instanceof HttpResponse) {
          if (!event.ok) {
            this.router.navigate(['/error', event.status]);
            return null;
          } else {
            return event;
          }
        }
      })
      .catch(error => {
        // console.log(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error.message === 'Token has expired') {
            auth.logout();
            this.router.navigate(['/auth/login']);
          }/* else {
            this.router.navigate(['/error', error.status]);
          }*/
          return Observable.throw(error);
        }
      });
  }
}
