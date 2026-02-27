import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Driver, DriverDto } from '../../common/interfaces/logistic';

export class DriversService<Properties extends object = object> extends RestfulService<Driver<Properties>, DriverDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('logistic/drivers', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new DriversService<Properties>(axios);
  }
}
