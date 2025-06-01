import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Activity, ActivityDto } from '../../common/interfaces/general';

export class ActivitiesService<Properties extends object = object> extends RestfulService<
  Activity<Properties>,
  ActivityDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('activities', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ActivitiesService<Properties>(axios);
  }
}
