import { DateFromPipe } from './date-from.pipe';

describe('DateFromPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFromPipe();
    expect(pipe).toBeTruthy();
  });
});
