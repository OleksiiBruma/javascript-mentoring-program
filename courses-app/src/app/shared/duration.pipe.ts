import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration"
})
export class DurationPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    const num = parseInt(value);
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    const hoursText = rhours > 1 ? " hours" : " hour";
    const minutesText = rminutes > 1 ? " minutes" : " minute";
    return `${rhours ? rhours + hoursText : " "} ${
      rminutes ? rminutes + minutesText : " "
    }`;
  }
}
