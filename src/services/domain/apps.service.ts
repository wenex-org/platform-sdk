import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { App, AppDto } from '../../common/interfaces/domain';

export class AppsService<Properties extends object = object> extends RestfulService<App<Properties>, AppDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('domain/apps', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new AppsService<Properties>(axios, prefix || '/');
  }
}
