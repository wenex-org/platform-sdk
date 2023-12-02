import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Grant, GrantDto } from '../../common/interfaces';

export class GrantsService extends RestfulService<Grant, GrantDto> {
  constructor(protected axios: AxiosInstance) {
    super('grants', axios);
  }
}
