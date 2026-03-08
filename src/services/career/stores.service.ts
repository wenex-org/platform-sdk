import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Store, StoreDto } from '../../common/interfaces/career';

export class StoresService<Properties extends object = object> extends RestfulService<Store<Properties>, StoreDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/stores', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new StoresService<Properties>(axios, prefix || '/');
  }
}
