import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Setting, SettingDto } from '../../common/interfaces/context';

export class SettingsService<Properties extends object = object> extends RestfulService<
  Setting<Properties>,
  SettingDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('settings', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new SettingsService<Properties>(axios);
  }
}
