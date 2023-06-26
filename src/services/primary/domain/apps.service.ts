import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { App } from '../../../common/interfaces';

export class AppsService extends RestfulService<App> {
  constructor(protected client: AxiosInstance) {
    super('apps', client);
  }
}
