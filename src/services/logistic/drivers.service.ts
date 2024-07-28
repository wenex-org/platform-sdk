import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Driver, DriverDto } from '../../common/interfaces';

export class DriversService extends RestfulService<Driver, DriverDto> {
  constructor(protected axios: AxiosInstance) {
    super('drivers', axios);
  }
}
