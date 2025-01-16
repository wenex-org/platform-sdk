import axios from 'axios';

import { Platform } from '../src';

describe('test platform', () => {
  it('should define platform instance', () => {
    expect(Platform.build(axios.create())).toBeDefined();
  });
});
