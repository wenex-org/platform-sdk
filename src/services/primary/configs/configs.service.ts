import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { Config } from '../../../common/interfaces';

export class ConfigsService extends RestfulService<Config> {
  constructor(protected client: AxiosInstance) {
    super('configs', client);
  }
}
