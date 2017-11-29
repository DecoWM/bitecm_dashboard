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
  private _agencia: any;

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
      if (session && session.usuario) {
        this._user = session.usuario;
        return session.usuario;
      } else {
        return null;
      }
    }
  }

  get agencia(): any {
    if (this._agencia) {
      return this._agencia;
    } else {
      const session = JSON.parse(localStorage.getItem('session'));
      if (session && session.agencia) {
        this._agencia = session.agencia;
        return session.agencia;
      } else {
        return null;
      }
    }
  }

  set agencia(agencia) {
    this._agencia = agencia;
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
      agencia: this._agencia
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
    return this.user.roles.includes(1) || this.user.roles.includes(2);
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
          this.afAuth.auth.signInAnonymously().catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            loginObs.error({message: errorMessage});
          });
          this.afAuth.auth.onAuthStateChanged(user => {
            if (user) {
              // User is signed in.
              localStorage.setItem('session', JSON.stringify(data));
              const isAnonymous = user.isAnonymous;
              const uid = user.uid;
              loginObs.next(data);
            } else {
              // User is signed out.
              // loginObs.next({message: 'Usuario cerró sesión'});
            }
          });
        }
      }, error => {
        // const message = JSON.parse(error._body);
        // loginObs.error({message: message.errorMessage});
        loginObs.error(error);
      });

    return loginObs;
  }

  logout(redirect = false) {
    this.afAuth.auth.signOut();
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
