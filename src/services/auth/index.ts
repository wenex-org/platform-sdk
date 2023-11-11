import { AxiosInstance } from 'axios';

import { Authentication } from './authentication.service';
import { Authorization } from './authorization.service';
import { GrantsService } from './grants.service';

export * from './grants.service';
export * from './authorization.service';
export * from './authentication.service';

export class AuthClient {
  private $grants!: GrantsService;
  private $authorization!: Authorization;
  private $authentication!: Authentication;

  constructor(protected client: AxiosInstance) {}

  get authentication() {
    return (this.$authentication =
      this.$authentication ?? Authentication.build(this.client));
  }

  get authorization() {
    return (this.$authorization =
      this.$authorization ?? Authorization.build(this.client));
  }

  get grants() {
    return (this.$grants = this.$grants ?? new GrantsService(this.client));
  }
}
