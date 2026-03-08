import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Items, Result, Serializer } from '../../common/core/interfaces';
import { Stat, StatCollectDto, StatDto } from '../../common/interfaces/special';

export class StatsService<Properties extends object = object> extends RestfulService<Stat<Properties>, StatDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('special/stats', axios, pathPrefix);
  }

  async collect(
    data: StatCollectDto<Properties>,
    config?: RequestConfig<Stat<Properties>>,
  ): Promise<Serializer<Stat<Properties>>[]> {
    return (await this.post<Items<Serializer<Stat<Properties>>>, StatCollectDto<Properties>>(this.url('collect'), data, config))
      .items;
  }

  async stackup(data: StatCollectDto<Properties>, config?: RequestConfig<Stat<Properties>>): Promise<Result> {
    return await this.post<Result, StatCollectDto<Properties>>(this.url('stackup'), data, config);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new StatsService<Properties>(axios, prefix || '/');
  }
}
