import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DtDetalleInterface } from '../../../shared/ui/datatable/dt-detalle.interface';

@Component({
    templateUrl: './detalle-orden.component.html'
})
export class DetalleOrdenComponent implements DtDetalleInterface {
    @Input() data: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    Actividades(data: any): void {
        this.router.navigate([data._id, 'actividades'], {relativeTo: this.route});
    }

    Editar(data: any): void {
        this.router.navigate(['editar', data._id], {relativeTo: this.route});
    }

    Desactivar(data: any): void {
        this.router.navigate(['desactivar', data._id], {relativeTo: this.route});
    }
}
