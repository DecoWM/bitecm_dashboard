import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .map(event => {
        if (event instanceof HttpResponse) {
          // console.log(event);
          if (!event.ok) {
            this.router.navigate(['/error', event.status]);
            return null;
          } else {
            return event;
          }
        }
      })
      .catch(error => {
        if (error instanceof HttpErrorResponse) {
          // this.router.navigate(['/error', error.status]);
          this.router.navigate(['/auth/login']);
          return Observable.throw(error);
        }
      });
  }
}
