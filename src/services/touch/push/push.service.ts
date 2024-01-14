import type { AxiosInstance } from 'axios';

import { PushHistoryService } from './history.service';
import { RestfulService } from '../../../common/classes';
import { Push, PushDto } from '../../../common/interfaces';

export class PushService extends RestfulService<Push, PushDto> {
  private $histories!: PushHistoryService;

  constructor(protected axios: AxiosInstance) {
    super('push', axios);
  }

  get histories() {
    return (this.$histories = this.$histories ?? new PushHistoryService(this.axios));
  }
}
