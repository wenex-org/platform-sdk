import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { Session } from '../../../common/interfaces';

export class SessionsService extends RestfulService<Session> {
  constructor(protected client: AxiosInstance) {
    super('sessions', client);
  }
}
