import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {addClassName, removeClassName} from '../../../utils/dom-helpers';

declare var $: any;

@Directive({
  selector: '[select2]'
})
export class Select2Directive implements OnInit {
  @Input('smartSelect2Options') options: any = {};
  @Input('smartSelect2Selected') selected: any = null;
  @Output('onSmartSelect2Change') onChange: EventEmitter<any> = new EventEmitter();
  @Output('onSmartSelect2Select') onSelect: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
    addClassName(this.el.nativeElement, ['sa-cloak', 'sa-hidden'])
  }

  ngOnInit() {
    this.loadSelect();
  }

  loadSelect() {
     System.import('script-loader!select2/dist/js/select2.min.js')
      .then(() => {
        const elem = $(this.el.nativeElement)
          .select2(this.options)
          .on('change', (event) => {
            if (this.onChange) {
              this.onChange.emit(event);
            }
          })
          .on('select2:select', (event) => {
            if (this.onSelect) {
              this.onSelect.emit(event);
            }
          });

        if (this.selected) {
          elem.val(this.selected).trigger('change');
        } else {
          elem.val('').trigger('change');
        }

        removeClassName(this.el.nativeElement, ['sa-hidden']);
    });
  }

  loadSelf() {
    const self = this;
    setTimeout(function(){
    System.import('script-loader!select2/dist/js/select2.min.js')
      .then(() => {
        const elem = $(self.el.nativeElement)
          .select2(self.options)
          .on('change', (event) => {
            if (self.onChange) {
              self.onChange.emit(event);
            }
          })
          .on('select2:select', (event) => {
            if (self.onSelect) {
              self.onSelect.emit(event);
            }
          });

        if (self.selected) {
          elem.val(self.selected).trigger('change');
        } else {
          elem.val('').trigger('change');
        }

        removeClassName(self.el.nativeElement, ['sa-hidden']);
    });
    }, 1000);
  }

}
