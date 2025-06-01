import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Cargo, CargoDto } from '../../common/interfaces/logistic';

export class CargoesService<Properties extends object = object> extends RestfulService<Cargo<Properties>, CargoDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('cargoes', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new CargoesService<Properties>(axios);
  }
}
