import { AxiosInstance } from 'axios';

import { Grant } from '../../common/interfaces';
import { RestfulService } from '../../common/core';

export class GrantsService extends RestfulService<Grant> {
  constructor(protected client: AxiosInstance) {
    super('grants', client);
  }
}
