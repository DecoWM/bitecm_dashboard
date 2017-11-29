import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hourmins'})
export class HourMinsPipe implements PipeTransform {
  transform(value: string): string {
    var h = (h = parseInt(value.substr(0,2))) > 12 ? (h - 12).toString()+':$ pm' : h.toString()+':$ am';
    return h.replace('$',value.substr(2,2));
  }
}