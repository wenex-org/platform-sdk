import type { AxiosInstance } from 'axios';

import { PushHistoriesService } from './history.service';
import { RequestConfig, RestfulService } from '../../../common/classes';
import { Push, PushDto, PushHistory, PushHistoryDto } from '../../../common/interfaces';

export class PushesService extends RestfulService<Push, PushDto> {
  protected $histories?: PushHistoriesService;

  constructor(protected axios: AxiosInstance) {
    super('pushes', axios);
  }

  get histories() {
    return (this.$histories = this.$histories ?? new PushHistoriesService(this.axios));
  }

  async send(data: PushHistoryDto, config?: RequestConfig<PushHistory>): Promise<void> {
    return await this.post<void, PushHistoryDto>(this.url('send'), data, config);
  }
}
