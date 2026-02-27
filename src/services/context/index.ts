import type { AxiosInstance } from 'axios';

import { ConfigsService } from './configs.service';
import { SettingsService } from './settings.service';

export * from './configs.service';
export * from './settings.service';

export class Client<Properties extends object = object> {
  protected _configs?: ConfigsService<Properties>;
  protected _settings?: SettingsService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get configs() {
    return (this._configs = this._configs ?? ConfigsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get settings() {
    return (this._settings = this._settings ?? SettingsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
