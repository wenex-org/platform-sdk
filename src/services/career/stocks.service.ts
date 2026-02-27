import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Stock, StockDto } from '../../common/interfaces/career';

export class StocksService<Properties extends object = object> extends RestfulService<Stock<Properties>, StockDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/stocks', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new StocksService<Properties>(axios, prefix || '/');
  }
}
