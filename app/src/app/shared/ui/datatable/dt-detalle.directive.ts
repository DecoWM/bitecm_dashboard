import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[detalle]'
})
export class DtDetalleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}