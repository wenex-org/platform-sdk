import type { AxiosInstance } from 'axios';

import { PushHistoryService } from './history.service';
import { RequestConfig, RestfulService } from '../../../common/classes';
import { Push, PushDto, PushHistory, PushHistoryDto } from '../../../common/interfaces';

export class PushService extends RestfulService<Push, PushDto> {
  private $histories!: PushHistoryService;

  constructor(protected axios: AxiosInstance) {
    super('push', axios);
  }

  get histories() {
    return (this.$histories = this.$histories ?? new PushHistoryService(this.axios));
  }

  async send(data: PushHistoryDto, config?: RequestConfig<PushHistory>): Promise<void> {
    return await this.post<void, PushHistoryDto>(this.url('send'), data, config);
  }
}
