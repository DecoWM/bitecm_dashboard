import { Directive, ElementRef, OnInit, Input, EventEmitter, Output } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[saUiDatepicker]'
})
export class UiDatepickerDirective implements OnInit {

  @Input() saUiDatepicker: any;
  @Output('onSmartDatepickerChange') onChange: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    System.import('jquery-ui-npm/jquery-ui.min.js').then(() => {
      this.attach();
    });
  }

  attach() {
    const onSelectCallbacks = [];
    const saUiDatepicker = this.saUiDatepicker || {};
    const element = $(this.el.nativeElement);

    element.keydown((e) => {
      if (e.keyCode === 8 || e.keyCode === 46) {
        $.datepicker._clearDate(element);
      } else {
        return false;
      }
    })

    if (saUiDatepicker.minRestrict) {
      onSelectCallbacks.push((selectedDate) => {
        $(saUiDatepicker.minRestrict).datepicker('option', 'minDate', selectedDate);
      });
    }
    if (saUiDatepicker.maxRestrict) {
      onSelectCallbacks.push((selectedDate) => {
        $(saUiDatepicker.maxRestrict).datepicker('option', 'maxDate', selectedDate);
      });
    }

    // Let others know about changes to the data field
    onSelectCallbacks.push((selectedDate) => {
      element.triggerHandler('change');

      const form = element.closest('form');

      if (typeof form.bootstrapValidator === 'function') {
        try {
          form.bootstrapValidator('revalidateField', element);
        } catch (e) {
          console.log(e.message)
        }
      }
    });

    const options = $.extend(saUiDatepicker, {
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>',
      onSelect: (selectedDate, obj) => {
        this.onChange.emit({data: selectedDate, currentTarget: obj.input[0]});
        onSelectCallbacks.forEach((callback) => {
          callback.call(callback, selectedDate)
        })
      }
    });

    element.datepicker(options);
  }
}
