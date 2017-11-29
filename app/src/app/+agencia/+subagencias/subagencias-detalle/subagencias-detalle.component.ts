import { DtDetalleInterface } from './../../../shared/ui/datatable/dt-detalle.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subagencias-detalle',
  templateUrl: './subagencias-detalle.component.html',
  styles: []
})
export class SubagenciasDetalleComponent implements DtDetalleInterface, OnInit {
  @Input() data: any;
  estilos: string[];
  colors: any;

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit() {
    if (this.data.estilos) {
      this.estilos = Object.keys(this.data.estilos.color);
      this.colors = this.data.estilos.color;
    }
  }

  Detalle(data: any): void {
      this.router.navigate(['detalle', data._id], {relativeTo: this.route});
  }

  Editar(data: any): void {
      this.router.navigate(['editar', data._id], {relativeTo: this.route});
  }

  Desactivar(data: any): void {
      this.router.navigate(['desactivar', data._id], {relativeTo: this.route});
  }
}
