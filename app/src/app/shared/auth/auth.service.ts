// import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public userSubject: Subject<any>;
  public redirectUrl: string;

  private authenticated = false;
  private _token: string;
  private _user: any;
  private _branch: any;

  get token(): string {
    if (this._token && this._token.length) {
      return this._token;
    } else {
      const session = JSON.parse(localStorage.getItem('session'));
      if (session && session.token && session.token.length) {
        this._token = session.token;
        return session.token;
      } else {
        return null;
      }
    }
  }

  get user(): any {
    if (this._user) {
      return this._user;
    } else {
      const session = JSON.parse(localStorage.getItem('session'));
      if (session && session.user) {
        this._user = session.user;
        return session.user;
      } else {
        return null;
      }
    }
  }

  get branch(): any {
    if (this._branch) {
      return this._branch;
    } else {
      const session = JSON.parse(localStorage.getItem('session'));
      if (session && session.branch) {
        this._branch = session.branch;
        return session.branch;
      } else {
        return null;
      }
    }
  }

  set branch(branch) {
    this._branch = branch;
    this.updateSession();
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    public afAuth: AngularFireAuth
  ) { }

  updateSession() {
    const data = {
      token: this._token,
      usuario: this._user,
      branch: this._branch
    };
    localStorage.setItem('session', JSON.stringify(data));
  }

  isAuthenticated() {
    return this.token && this.user;
  }

  isAdmin() {
    return this.user.roles.includes(1);
  }

  isAgente() {
    return true;
    // return this.user.roles.includes(1) || this.user.roles.includes(2);
  }

  isOperador() {
    return this.user.roles.includes(1) || this.user.roles.includes(3);
  }

  getAuthorizationHeader() {
     return 'Bearer ' + this.token;
  }

  login(user: string, password: string) {
    const loginObs: Subject<any> = new Subject();

    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/x-www-form-urlencoded');
    this.http
      .post(
        '/api/auth/admin/login',
        { email: user, password: password }
        // { headers: headers }
      )
      .map((data: any) => {
        if (data.usuario && data.token) {
          data.redirectTo = this.redirectUrl ? this.redirectUrl : '';
        }
        return data;
      })
      .subscribe(data => {
        if (data.success) {
          localStorage.setItem('session', JSON.stringify(data.data));
          loginObs.next(data);
        }
      }, error => {
        // const message = JSON.parse(error._body);
        // loginObs.error({message: message.errorMessage});
        loginObs.error(error);
      });

    return loginObs;
  }

  logout(redirect = false) {
    this._token = null;
    this._user = null;
    localStorage.removeItem('session');
    if (redirect) {
      this.router.navigate(['/auth/login']);
    }
  }

  private showNavBar(ifShow: boolean) {
     this.showNavBarEmitter.emit(ifShow);
  }
}
