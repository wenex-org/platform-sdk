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

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get devices() {
    return (this._devices = this._devices ?? DevicesService.build<Properties>(this.axios, this.pathPrefix));
  }

  get sensors() {
    return (this._sensors = this._sensors ?? SensorsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get metrics() {
    return (this._metrics = this._metrics ?? MetricsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
