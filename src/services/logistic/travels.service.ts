import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Travel, TravelDto } from '../../common/interfaces/logistic';
import { RequestConfig } from '../../common/core/types';
import { Routing } from '../../common/interfaces/logistic/travels';
import { Data } from '../../common/core/interfaces';

export class TravelsService<Properties extends object = object> extends RestfulService<Travel<Properties>, TravelDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('logistic/travels', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new TravelsService<Properties>(axios);
  }

  async routing(data: Routing<Properties>, config?: RequestConfig): Promise<Routing<Properties>> {
    return (await this.post<Data<Routing<Properties>>, Routing<Properties>>(this.url('routing'), data, config)).data;
  }
}
