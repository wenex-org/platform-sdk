import type { AxiosInstance } from 'axios';

import { Items, Serializer } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { Stat, StatCollectDto, StatDto } from '../../common/interfaces/special';

export class StatsService<Properties extends object = object> extends RestfulService<Stat<Properties>, StatDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('stats', axios);
  }

  async collect(
    data: StatCollectDto<Properties>,
    config?: RequestConfig<Stat<Properties>>,
  ): Promise<Serializer<Stat<Properties>>[]> {
    return (await this.post<Items<Serializer<Stat<Properties>>>, StatCollectDto<Properties>>(this.url('collect'), data, config))
      .items;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new StatsService<Properties>(axios);
  }
}
