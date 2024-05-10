import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential',
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exposan: number = 1): number {
    return Math.pow(value, exposan);
  }
}
