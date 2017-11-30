import { Component, OnInit, ViewChild, ElementRef,
        AfterViewInit, EventEmitter, Output, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styles: []
})
export class FormContainerComponent implements OnInit, AfterViewInit {
  @Input('validatorOptions') options: any;
  @Output() onValidationSuccess: EventEmitter<any> = new EventEmitter();
  @ViewChild('theForm') form: ElementRef;
  private $form = null;

  constructor() { }

  private getFormValidator() {
    return this.$form.data('bootstrapValidator') || { isValid: () => false, validate: () => false };
  }

  ngAfterViewInit() {
    this.$form = $(this.form.nativeElement);
    this.$form.on('success.form.bv', (e) => (this.onValidationSuccess.emit(e)) );
  }

  ngOnInit() {
  }

}
