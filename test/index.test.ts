import axios from 'axios';

import { PlatformClient } from '../src';

describe('test platform client', () => {
  it('should define platform instance', () => {
    expect(new PlatformClient(axios.create())).toBeDefined();
  });
});
