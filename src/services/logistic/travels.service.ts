import type { AxiosInstance } from 'axios';

import { Data } from '../../common/core/interfaces';
import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { RoutingRequest, RoutingResponse, Travel, TravelDto } from '../../common/interfaces/logistic';

export class TravelsService<Properties extends object = object> extends RestfulService<Travel<Properties>, TravelDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('logistic/travels', axios, pathPrefix);
  }

  async routing(data: RoutingRequest<Properties>, config?: RequestConfig): Promise<RoutingResponse<Properties>> {
    return (await this.post<Data<RoutingResponse<Properties>>, RoutingRequest<Properties>>(this.url('routing'), data, config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new TravelsService<Properties>(axios, prefix || '/');
  }
}
