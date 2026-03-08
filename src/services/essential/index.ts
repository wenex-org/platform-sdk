import type { AxiosInstance } from 'axios';

import { SagasService } from './sagas.service';

export * from './sagas.service';

export class Client<Properties extends object = object> {
  protected _sagas?: SagasService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get sagas() {
    return (this._sagas = this._sagas ?? SagasService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
