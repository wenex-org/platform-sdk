import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Vehicle, VehicleDto } from '../../common/interfaces/logistic';

export class VehiclesService<Properties extends object = object> extends RestfulService<
  Vehicle<Properties>,
  VehicleDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('logistic/vehicles', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new VehiclesService<Properties>(axios, prefix || '/');
  }
}
