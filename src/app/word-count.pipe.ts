import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
  standalone: true
})
export class WordCountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
