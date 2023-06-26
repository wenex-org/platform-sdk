import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { Grant } from '../../../common/interfaces';

export class GrantsService extends RestfulService<Grant> {
  constructor(protected client: AxiosInstance) {
    super('grants', client);
  }
}
