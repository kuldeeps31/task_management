import { WordCountPipe } from './word-count.pipe';
import { Pipe,PipeTransform } from '@angular/core';


describe('WordCountPipe', () => {
  it('create an instance', () => {
    const pipe = new WordCountPipe();
    expect(pipe).toBeTruthy();
  });
});
