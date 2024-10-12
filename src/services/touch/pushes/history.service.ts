import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/classes';
import { PushHistory, PushHistoryDto } from '../../../common/interfaces';

export class PushHistoriesService extends RestfulService<PushHistory, PushHistoryDto> {
  constructor(protected axios: AxiosInstance) {
    super('push-histories', axios);
  }
}
