import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styles: []
})
export class ErrorComponent implements OnInit {
  code: Number;
  mensaje: String;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.code = Number(params['code']);
      switch (this.code) {
        case Number(401): this.mensaje = 'No autorizado'; break;
        case Number(403): this.mensaje = 'Acceso restringido'; break;
        case Number(404): this.mensaje = 'Página no encontrada'; break;
        case Number(500): this.mensaje = 'Problemas en el servidor'; break;
      }
    });
  }
}
