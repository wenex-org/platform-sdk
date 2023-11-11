import { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Session, SessionDto } from '../../common/interfaces';

export class SessionsService extends RestfulService<Session, SessionDto> {
  constructor(protected client: AxiosInstance) {
    super('sessions', client);
  }
}
