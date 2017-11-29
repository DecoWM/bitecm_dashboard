import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DtDetalleInterface } from '../../../shared/ui/datatable/dt-detalle.interface';

@Component({
    templateUrl: './detalle-predefinida.component.html'
})
export class DetallePredefinidaComponent implements DtDetalleInterface {
    @Input() data: any;

    constructor(
        private route: ActivatedRoute,
        private router:Router
    ) { }

    Detalle(data: any): void {
        this.router.navigate(['detalle',data._id], {relativeTo: this.route});
    }

    Editar(data: any): void {
        this.router.navigate(['editar',data._id], {relativeTo: this.route});
    }

    Desactivar(data: any): void {
        this.router.navigate(['desactivar',data._id], {relativeTo: this.route});
    }
}