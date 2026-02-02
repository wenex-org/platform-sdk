import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Device, DeviceDto } from '../../common/interfaces/thing';

export class DevicesService<Properties extends object = object> extends RestfulService<Device<Properties>, DeviceDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('thing/devices', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new DevicesService<Properties>(axios);
  }
}
