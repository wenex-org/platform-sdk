import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Sensor, SensorDto } from '../../common/interfaces/thing';

export class SensorsService<Properties extends object = object> extends RestfulService<Sensor<Properties>, SensorDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('thing/sensors', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new SensorsService<Properties>(axios, prefix || '/');
  }
}
