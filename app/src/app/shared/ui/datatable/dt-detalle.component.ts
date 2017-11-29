import { Component, Type, Input, AfterViewInit, ElementRef,
    ViewChild, ViewContainerRef, ComponentRef, 
    ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { DtDetalleDirective } from "./dt-detalle.directive";
import { DtDetalleInterface } from "./dt-detalle.interface";

declare var $: any;

@Component({
    selector: 'sa-dt-detalle',
    template: `<ng-template detalle></ng-template>`,
    styles: [`:host >>> table tr { 
        background-color: rgba(205,209,98,.05)!important; }`]
})
export class DtDetalleComponent implements AfterViewInit {
    @ViewChild(DtDetalleDirective) detalle: DtDetalleDirective;
    @Input() data: any;
    @Input() type: Type<any>;
    @Input() trigger: string;
    @Input() cols: number;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private element: ElementRef) {
    }

    ngAfterViewInit() {
        if(this.data && this.type && this.trigger) {
            let self = this; let tr;
            let domel = $(this.element.nativeElement);
            this.viewContainerRef = this.detalle.viewContainerRef;
            $('#'+this.trigger).on('click', function () {
                let componentFactory = self.componentFactoryResolver.resolveComponentFactory(self.type);
                if(self.viewContainerRef.length > 0) {
                    self.viewContainerRef.clear();
                    $(this).parent().removeClass('shown').after(domel);
                    tr.remove();
                }
                else {
                    let componentRef = self.viewContainerRef.createComponent(componentFactory);
                    (<DtDetalleInterface>componentRef.instance).data = self.data;
                    tr = $(`<tr class="details-content"></tr>`);
                    let td = $(`<td colspan="${self.cols}"></td>`).append(domel);
                    $(this).parent().addClass('shown').after(tr.append(td));
                }
            })
        }        
    }

}