import type { AxiosInstance } from 'axios';

import { SagasService } from './sagas.service';

export * from './sagas.service';

export class Client<Properties extends object = object> {
  protected _sagas?: SagasService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get sagas() {
    return (this._sagas = this._sagas ?? SagasService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
