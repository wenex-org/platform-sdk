import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Setting, SettingDto } from '../../common/interfaces';

export class SettingsService extends RestfulService<Setting, SettingDto> {
  constructor(protected axios: AxiosInstance) {
    super('settings', axios);
  }
}
