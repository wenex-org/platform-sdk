import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Travel, TravelDto } from '../../common/interfaces/logistic';

export class TravelsService<Properties extends object = object> extends RestfulService<Travel<Properties>, TravelDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('travels', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new TravelsService<Properties>(axios);
  }
}
