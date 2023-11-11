import { AxiosInstance } from 'axios';

import { Session } from '../../common/interfaces';
import { RestfulService } from '../../common/core';

export class SessionsService extends RestfulService<Session> {
  constructor(protected client: AxiosInstance) {
    super('sessions', client);
  }
}
