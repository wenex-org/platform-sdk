import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Activity, ActivityDto } from '../../common/interfaces/general';

export class ActivitiesService<Properties extends object = object> extends RestfulService<
  Activity<Properties>,
  ActivityDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('general/activities', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new ActivitiesService<Properties>(axios, prefix || '/');
  }
}
