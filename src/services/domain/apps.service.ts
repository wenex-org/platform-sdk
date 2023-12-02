import type { AxiosInstance } from 'axios';

import { App, AppDto } from '../../common/interfaces';
import { RestfulService } from '../../common/classes';

export class AppsService extends RestfulService<App, AppDto> {
  constructor(protected axios: AxiosInstance) {
    super('apps', axios);
  }
}
