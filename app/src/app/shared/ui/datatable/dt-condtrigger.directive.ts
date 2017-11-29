import { Directive, AfterViewInit, Input } from '@angular/core';
import { Subject } from "rxjs/Rx";

@Directive({
  selector: '[sa-cond-trigger]',
})
export class DtCondTriggerDirective implements AfterViewInit{
    constructor() { }

    @Input() cond: boolean;
    @Input() trigger: Subject<any>;

    ngAfterViewInit() {
        if(this.trigger && this.cond) {
            this.trigger.next();
        }
    }
}