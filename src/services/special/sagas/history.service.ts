import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/classes';
import { SagaHistory, SagaHistoryDto } from '../../../common/interfaces';

export class SagaHistoriesService extends RestfulService<SagaHistory, SagaHistoryDto> {
  constructor(protected axios: AxiosInstance) {
    super('saga-histories', axios);
  }
}
