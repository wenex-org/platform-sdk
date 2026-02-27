import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Data, Serializer } from '../../common/core/interfaces';
import { Push, PushDto, PusHistory, PusHistorySendDto } from '../../common/interfaces/touch';

export class PushesService<Properties extends object = object> extends RestfulService<Push<Properties>, PushDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('touch/pushes', axios, pathPrefix);
  }

  async send(data: PusHistorySendDto, config?: RequestConfig<PusHistory>): Promise<Serializer<PusHistory>> {
    return (await this.post<Data<Serializer<PusHistory>>, PusHistorySendDto>(this.url('send'), data, config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new PushesService<Properties>(axios);
  }
}
