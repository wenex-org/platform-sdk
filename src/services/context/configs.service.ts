import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Config, ConfigDto } from '../../common/interfaces/context';

export class ConfigsService<Properties extends object = object> extends RestfulService<Config<Properties>, ConfigDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('context/configs', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ConfigsService<Properties>(axios);
  }
}
