import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/classes';
import { SagaHistoriesService } from './history.service';
import { Saga, SagaDto } from '../../../common/interfaces';

export class SagasService extends RestfulService<Saga, SagaDto> {
  protected $histories?: SagaHistoriesService;

  constructor(protected axios: AxiosInstance) {
    super('sagas', axios);
  }

  get histories() {
    return (this.$histories = this.$histories ?? new SagaHistoriesService(this.axios));
  }
}
