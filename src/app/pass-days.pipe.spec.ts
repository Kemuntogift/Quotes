import { PassDaysPipe } from './pass-days.pipe';

describe('PassDaysPipe', () => {
  it('create an instance', () => {
    const pipe = new PassDaysPipe();
    expect(pipe).toBeTruthy();
  });
});
