import {Directive, Input, Output, ElementRef, OnInit, EventEmitter} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[saColorpicker]'
})
export class ColorpickerDirective implements OnInit {

  @Input() saColorpicker: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    System.import('bootstrap-colorpicker/dist/js/bootstrap-colorpicker.js')
      .then(() => {
        const elem = $(this.el.nativeElement)
          .colorpicker(this.saColorpicker || {})
          .on('changeColor', (event) => {
            if (event.value && this.onChange) {
              this.onChange.emit(event);
            }
          });
      });
  }

}
