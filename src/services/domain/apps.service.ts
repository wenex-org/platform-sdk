import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { App, AppDto } from '../../common/interfaces/domain';

export class AppsService<Properties extends object = object> extends RestfulService<App<Properties>, AppDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('apps', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new AppsService<Properties>(axios);
  }
}
