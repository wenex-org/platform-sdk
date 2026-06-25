import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { PusHistory, PusHistoryDto } from '../../common/interfaces/touch';

export class PushHistoriesService<Properties extends object = object> extends RestfulService<
  PusHistory<Properties>,
  PusHistoryDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('touch/push-histories', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new PushHistoriesService<Properties>(axios, prefix || '/');
  }
}
