import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Customer, CustomerDto } from '../../common/interfaces/career';

export class CustomersService<Properties extends object = object> extends RestfulService<
  Customer<Properties>,
  CustomerDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('career/customers', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new CustomersService<Properties>(axios);
  }
}
