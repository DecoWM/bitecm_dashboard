import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Rx';
import { AuthService } from './../shared/auth/auth.service';

import { NotificationService } from '../shared/utils/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private inj: Injector,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.inj.get(AuthService);
    return next
      .handle(req)
      .map(event => {
        // console.log(event);
        if (event instanceof HttpResponse) {
          console.log(event);
          if (!event.ok) {
            this.router.navigate(['/error', event.status]);
          } else {
            if (event.body.message === 'Token has expired') {
              auth.logout();
              this.router.navigate(['/auth/login']);
            }
          }
          return event;
        }
      })
      .catch(error => {
        // console.log(error);
        if (error instanceof HttpErrorResponse) {
          //Si expiro el token (respuesta normal 401)
          if (error.error.message === 'Token has expired') {
            auth.refreshToken()
                .subscribe((data: any) => {
                    
                    // si retorna el nuevo token
                    if(data.success === true){
                      const session = JSON.parse(localStorage.getItem('session'));
                      session.token = data.token;
                      localStorage.setItem('session', JSON.stringify(session));
                      auth.refresh_Token(session.token);
                      this.mensajeTerminoSesion();
                    }
                    // si no renueva e token, entonces se sale del sistema y 
                    // se direcciona al login
                    else{
                      auth.logout();
                      this.router.navigate(['/auth/login']);
                    }

            })

            //if(auth.refreshToken()){
              //console.log("El token se ()ha refrescado correctamente!");
            //}
            //else{
              //console.log("El token se ha vencido y se muestra login!");
              //Solicitar el refrezco de token this.auth.refreshToken() que es un servicio que
              //hara una request http al servidor para que devuelva un token refrezcado
              //habiendole entregado un token expirado y lo refrezca en el local storage 
              //(solo si es exitoso)

              //Si el token se refrezco correctamente mostrar una notificación que 
              //indique que la sesión se refrezco por tiempo limite y que vuelva a 
              //ejecutar la acción requerida


              //Si el token no se refrezco correctamente, desloguear y redirigir al login
              //auth.logout();
              //this.router.navigate(['/auth/login']);
            //}
          } else {
            auth.logout();
            this.router.navigate(['/auth/login']);
            //this.router.navigate(['/error', error.status]);
          }
          return Observable.throw(error);
        }
        else{
          auth.logout();
          this.router.navigate(['/auth/login']);
          //this.router.navigate(['/error', error.status]);
        }
      });
  }

  mensajeTerminoSesion(){

    this.notificationService.smartMessageBox({
      title : `<i class="fa fa-sign-out txt-color-orangeDark"></i> Sesión: 
                 <span class="txt-color-orangeDark">
                     <strong> la sesión ha sido refrescada!. </strong>
                 </span>`,
      content : ' Por favor, vuelva a ejecutar la acción requerida.',
      buttons : '[Ok]'
    });

  }

}
