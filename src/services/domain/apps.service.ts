import { AxiosInstance } from 'axios';

import { App } from '../../common/interfaces';
import { RestfulService } from '../../common/core';

export class AppsService extends RestfulService<App> {
  constructor(protected client: AxiosInstance) {
    super('apps', client);
  }
}
