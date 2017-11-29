import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itinerariosTranslate'
})
export class ItinerariosTranslatePipe implements PipeTransform {

  transform(value: string[], args?: any): any {
    return value[0];
  }

}
