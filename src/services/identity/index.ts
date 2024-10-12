import { AxiosInstance } from 'axios';

import { ProfilesService } from './profiles.service';
import { SessionsService } from './sessions.service';
import { UsersService } from './users.service';

export * from './users.service';
export * from './profiles.service';
export * from './sessions.service';

export class IdentityClient {
  protected $users?: UsersService;
  protected $profiles?: ProfilesService;
  protected $sessions?: SessionsService;

  constructor(readonly axios: AxiosInstance) {}

  get users() {
    return (this.$users = this.$users ?? new UsersService(this.axios));
  }

  get profiles() {
    return (this.$profiles = this.$profiles ?? new ProfilesService(this.axios));
  }

  get sessions() {
    return (this.$sessions = this.$sessions ?? new SessionsService(this.axios));
  }
}
