import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
    private location: Location
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      // this.location.back();
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
