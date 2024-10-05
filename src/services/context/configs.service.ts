import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Config, ConfigDto } from '../../common/interfaces';

export class ConfigsService extends RestfulService<Config, ConfigDto> {
  constructor(protected axios: AxiosInstance) {
    super('configs', axios);
  }
}
