import {Component, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <block-ui [message]="'Cargando...'" [delayStart]="100" [delayStop]="100">
      <router-outlet></router-outlet>
    </block-ui>
  `
})
export class AppComponent {
  public title = 'app works!';

  public constructor(private viewContainerRef: ViewContainerRef) {}

}
