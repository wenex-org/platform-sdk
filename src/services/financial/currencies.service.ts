import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Currency, CurrencyDto } from '../../common/interfaces/financial';

export class CurrenciesService<Properties extends object = object> extends RestfulService<
  Currency<Properties>,
  CurrencyDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('financial/currencies', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new CurrenciesService<Properties>(axios, prefix || '/');
  }
}
