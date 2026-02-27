import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Setting, SettingDto } from '../../common/interfaces/context';

export class SettingsService<Properties extends object = object> extends RestfulService<
  Setting<Properties>,
  SettingDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('context/settings', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new SettingsService<Properties>(axios, prefix || '/');
  }
}
