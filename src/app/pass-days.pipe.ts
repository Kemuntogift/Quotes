import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passDays',
})
export class PassDaysPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    // var dateDifference = Math.abs(value - todayWithNoTime) //returns value in miliseconds
    var dateDifference = Math.abs(todayWithNoTime - value);
    const secondsInDay = 86400; //for all 24 hours
    var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    // if (dateCounter >= 1 && value > todayWithNoTime)
    if (dateCounter >= 1 && value < todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
