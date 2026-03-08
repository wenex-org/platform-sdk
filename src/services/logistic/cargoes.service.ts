import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Cargo, CargoDto } from '../../common/interfaces/logistic';

export class CargoesService<Properties extends object = object> extends RestfulService<Cargo<Properties>, CargoDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('logistic/cargoes', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new CargoesService<Properties>(axios, prefix || '/');
  }
}
