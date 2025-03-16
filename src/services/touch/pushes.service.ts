import type { AxiosInstance } from 'axios';

import { Data, Serializer } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { Push, PushDto, PusHistory, PusHistorySendDto } from '../../common/interfaces/touch';

export class PushesService<Properties extends object = object> extends RestfulService<Push<Properties>, PushDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('pushes', axios);
  }

  async send(data: PusHistorySendDto, config?: RequestConfig<PusHistory>): Promise<Serializer<PusHistory>> {
    return (await this.post<Data<Serializer<PusHistory>>, PusHistorySendDto>(this.url('send'), data, config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new PushesService<Properties>(axios);
  }
}
