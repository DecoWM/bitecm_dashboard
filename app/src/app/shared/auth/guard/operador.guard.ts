import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../auth.service';

@Injectable()
export class OperadorGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
      if (this.auth.isOperador()) {
        return true;
      } else {
        this.router.navigate(['/error/404']);
        return false;
      }
    }
}
