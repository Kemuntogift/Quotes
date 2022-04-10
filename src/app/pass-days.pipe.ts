import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passDays'
})
export class PassDaysPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
