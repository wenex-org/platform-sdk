import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Sensor, SensorDto } from '../../common/interfaces/thing';

export class SensorsService<Properties extends object = object> extends RestfulService<Sensor<Properties>, SensorDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('thing/sensors', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new SensorsService<Properties>(axios);
  }
}
