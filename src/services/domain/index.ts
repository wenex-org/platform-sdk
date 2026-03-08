import type { AxiosInstance } from 'axios';

import { AppsService } from './apps.service';
import { ClientsService } from './clients.service';

export * from './apps.service';
export * from './clients.service';

export class Client<Properties extends object = object> {
  protected _apps?: AppsService<Properties>;
  protected _clients?: ClientsService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get apps() {
    return (this._apps = this._apps ?? AppsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get clients() {
    return (this._clients = this._clients ?? ClientsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
