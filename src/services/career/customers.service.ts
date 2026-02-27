import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Customer, CustomerDto } from '../../common/interfaces/career';

export class CustomersService<Properties extends object = object> extends RestfulService<
  Customer<Properties>,
  CustomerDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/customers', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new CustomersService<Properties>(axios);
  }
}
