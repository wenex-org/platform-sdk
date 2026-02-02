import type { AxiosInstance } from 'axios';

import { DevicesService } from './devices.service';
import { SensorsService } from './sensors.service';
import { MetricsService } from './metrics.service';

export * from './devices.service';
export * from './sensors.service';
export * from './metrics.service';

export class Client<Properties extends object = object> {
  protected _devices?: DevicesService<Properties>;
  protected _sensors?: SensorsService<Properties>;
  protected _metrics?: MetricsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get devices() {
    return (this._devices = this._devices ?? DevicesService.build<Properties>(this.axios));
  }

  get sensors() {
    return (this._sensors = this._sensors ?? SensorsService.build<Properties>(this.axios));
  }

  get metrics() {
    return (this._metrics = this._metrics ?? MetricsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
