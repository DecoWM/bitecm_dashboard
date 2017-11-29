import {Directive, ElementRef, OnInit, Input, EventEmitter, Output} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[smartTimepicker]'
})
export class SmartTimepickerDirective implements OnInit{

  constructor(private el: ElementRef) { }
  @Input('smartTimepickerOptions') options: any = {};
  @Output('onSmartTimepickerUpdates') changeTime: EventEmitter<any> = new EventEmitter();  

  ngOnInit(){
    System.import('script-loader!bootstrap-timepicker/js/bootstrap-timepicker.min.js').then(()=>{
      this.render();
    })
  }

  render(){
    $(this.el.nativeElement)
      .timepicker(this.options)
      .on('changeTime.timepicker', (e) => (this.changeTime.emit(e)));
  }
}




  
