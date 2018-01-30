import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      if (route.children.length === 0) {
        if (this.auth.isOperador()) {
          this.router
            .navigate(['/ventas/ordenes'], { replaceUrl: true });
        } else if (this.auth.isEditor()) {
          this.router
            .navigate(['/productos/catalogo'], { replaceUrl: true });
        }
      }
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
