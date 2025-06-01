import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Vehicle, VehicleDto } from '../../common/interfaces/logistic';

export class VehiclesService<Properties extends object = object> extends RestfulService<
  Vehicle<Properties>,
  VehicleDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('logistic/vehicles', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new VehiclesService<Properties>(axios);
  }
}
