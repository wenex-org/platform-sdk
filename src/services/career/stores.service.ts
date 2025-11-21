import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Store, StoreDto } from '../../common/interfaces/career';

export class StoresService<Properties extends object = object> extends RestfulService<Store<Properties>, StoreDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('career/stores', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new StoresService<Properties>(axios);
  }
}
