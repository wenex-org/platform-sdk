import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Vehicle, VehicleDto } from '../../common/interfaces';

export class VehiclesService extends RestfulService<Vehicle, VehicleDto> {
  constructor(protected axios: AxiosInstance) {
    super('vehicles', axios);
  }
}
