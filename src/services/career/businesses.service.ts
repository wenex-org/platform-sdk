import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Business, BusinessDto } from '../../common/interfaces/career';

export class BusinessesService<Properties extends object = object> extends RestfulService<
  Business<Properties>,
  BusinessDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/businesses', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new BusinessesService<Properties>(axios);
  }
}
