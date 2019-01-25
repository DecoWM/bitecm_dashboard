import { Directive, AfterViewInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Directive({
  selector: '[sa-cond-trigger]',
})
export class DtCondTriggerDirective implements AfterViewInit {
  @Input() cond: boolean;
  @Input() trigger: Subject<any>;

  constructor() {}

  ngAfterViewInit() {
    if (this.trigger && this.cond) {
      this.trigger.next();
    }
  }
}
