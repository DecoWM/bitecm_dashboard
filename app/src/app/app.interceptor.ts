import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './shared/auth/auth.interceptor';
import {ErrorInterceptor} from './+error/error.interceptor';

export const APP_INTERCEPTOR_PROVIDERS = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
}, {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
}];
