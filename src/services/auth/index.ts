import type { AxiosInstance } from 'axios';

import { GrantsService } from './grants.service';
import { Authorization } from './authorization.service';
import { Authentication } from './authentication.service';

export * from './grants.service';
export * from './authorization.service';
export * from './authentication.service';

export class AuthClient {
  private $grants!: GrantsService;
  private $authorization!: Authorization;
  private $authentication!: Authentication;

  constructor(protected client: AxiosInstance) {}

  get grants() {
    return (this.$grants = this.$grants ?? new GrantsService(this.client));
  }

  get authorization() {
    return (this.$authorization =
      this.$authorization ?? Authorization.build(this.client));
  }

  get authentication() {
    return (this.$authentication =
      this.$authentication ?? Authentication.build(this.client));
  }
}
