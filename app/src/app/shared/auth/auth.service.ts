// import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';
// import { AngularFireAuth } from 'angularfire2/auth';

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
    private http: HttpClient
    // public afAuth: AngularFireAuth
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
    return this.user && this.user.roles.includes(1);
  }

  isEditor() {
    return this.user && (this.user.roles.includes(1) || this.user.roles.includes(2));
  }

  isOperador() {
    return this.user && (this.user.roles.includes(1) ||??this.user.roles.includes(3));
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
        '/api/auth/login',
        { user_email: user, password: password }
        // {??headers: headers }
      )
      .map((data: any) => {
        if (data.result.user && data.result.token) {
          data.result.redirectTo = this.redirectUrl ? this.redirectUrl : '';
        }
        return data;
      })
      .subscribe(data => {
        if (data.success) {
          localStorage.setItem('session', JSON.stringify(data.result));
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

  // IMPORTANTE
  // refrescar la variable _token
  refresh_Token(token){
    this._token = token;
  }

  // servicio que obtiene el nuevo token y lo pasa al proceso
  // de validacion del token activo
  refreshToken(){
     const datos: Subject<any> = new Subject();
     //console.log("Inicia el llamado de refreshToken");
     this.http
      .post(
        '/api/auth/refreshToken',
        { }
        // {??headers: headers }
      ).map((data: any) => {
        return data;
      })
      .subscribe(data => {
        datos.next(data);
      });

      return datos;
  }

  private showNavBar(ifShow: boolean) {
     this.showNavBarEmitter.emit(ifShow);
  }
}
