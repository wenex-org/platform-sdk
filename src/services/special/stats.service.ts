import { AxiosInstance } from 'axios';

import { Stat, StatDto } from '../../common/interfaces';
import { RequestConfig, RestfulService } from '../../common/classes';

export class StatsService extends RestfulService<Stat, StatDto> {
  constructor(protected axios: AxiosInstance) {
    super('stats', axios);
  }

  async collect(data: StatDto, config?: RequestConfig<Stat>): Promise<void> {
    return this.post<void, StatDto>(this.url('collect'), data, config);
  }
}
