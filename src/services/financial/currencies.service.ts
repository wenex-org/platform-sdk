import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Currency, CurrencyDto } from '../../common/interfaces/financial';

export class CurrenciesService<Properties extends object = object> extends RestfulService<
  Currency<Properties>,
  CurrencyDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('financial/currencies', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new CurrenciesService<Properties>(axios);
  }
}
