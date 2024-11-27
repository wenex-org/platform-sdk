import { hello } from '../src';

describe('test', () => {
  it('should be undefine', () => {
    expect(hello()).toBeDefined();
  });
});
