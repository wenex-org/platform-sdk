import { AxiosInstance } from 'axios';

import { UsersService } from './users.service';
import { ProfilesService } from './profiles.service';
import { SessionsService } from './sessions.service';

export * from './users.service';
export * from './profiles.service';
export * from './sessions.service';

export class IdentityClient {
  private $users!: UsersService;
  private $profiles!: ProfilesService;
  private $sessions!: SessionsService;

  constructor(protected client: AxiosInstance) {}

  get users() {
    return (this.$users = this.$users ?? new UsersService(this.client));
  }

  get profiles() {
    return (this.$profiles = this.$profiles ?? new ProfilesService(this.client));
  }

  get sessions() {
    return (this.$sessions = this.$sessions ?? new SessionsService(this.client));
  }
}
