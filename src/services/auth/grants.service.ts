import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Grant, GrantDto } from '../../common/interfaces/auth';

export class GrantsService<Properties extends object = object> extends RestfulService<Grant<Properties>, GrantDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('grants', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new GrantsService<Properties>(axios);
  }
}
