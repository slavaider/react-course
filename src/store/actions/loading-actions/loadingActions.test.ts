import { loaderOff, loaderOn } from './loadingActions';

describe('loading action', () => {
  test('loaderOff', () => {
    const result = loaderOff();
    expect(loaderOff()).toEqual(result);
  });
  test('loaderOn', () => {
    const result = loaderOn();
    expect(loaderOn()).toEqual(result);
  });
});
