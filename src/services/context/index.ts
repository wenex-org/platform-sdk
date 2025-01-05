import type { AxiosInstance } from 'axios';

import { ConfigsService } from './configs.service';
import { SettingsService } from './settings.service';

export * from './configs.service';
export * from './settings.service';

export class ContextClient<Properties extends object = object> {
  protected _configs?: ConfigsService<Properties>;
  protected _settings?: SettingsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get configs() {
    return (this._configs = this._configs ?? ConfigsService.build<Properties>(this.axios));
  }

  get settings() {
    return (this._settings = this._settings ?? SettingsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ContextClient<Properties>(axios);
  }
}
