import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[], ...args: string[]): string[] {
    const [order] = args;

    value.sort();
    if ('desc' == order) {
      value.reverse();
    }
    return value;
  }
}
