import type { AxiosInstance } from 'axios';

import { UsersService } from './users.service';
import { ProfilesService } from './profiles.service';
import { SessionsService } from './sessions.service';

export * from './users.service';
export * from './profiles.service';
export * from './sessions.service';

export class Client<Properties extends object = object> {
  protected _users?: UsersService<Properties>;
  protected _profiles?: ProfilesService<Properties>;
  protected _sessions?: SessionsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get users() {
    return (this._users = this._users ?? UsersService.build<Properties>(this.axios));
  }

  get profiles() {
    return (this._profiles = this._profiles ?? ProfilesService.build<Properties>(this.axios));
  }

  get sessions() {
    return (this._sessions = this._sessions ?? SessionsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
