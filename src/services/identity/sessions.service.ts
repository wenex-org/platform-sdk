import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Session, SessionDto } from '../../common/interfaces/identity';

export class SessionsService<Properties extends object = object> extends RestfulService<
  Session<Properties>,
  SessionDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('identity/sessions', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new SessionsService<Properties>(axios);
  }
}
