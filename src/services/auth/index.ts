import type { AxiosInstance } from 'axios';

import { GrantsService } from './grants.service';
import { Authorization } from './authorization.service';
import { Authentication } from './authentication.service';

export * from './grants.service';
export * from './authorization.service';
export * from './authentication.service';

export class AuthClient {
  protected $grants?: GrantsService;
  protected $authorization?: Authorization;
  protected $authentication?: Authentication;

  constructor(readonly axios: AxiosInstance) {}

  get grants() {
    return (this.$grants = this.$grants ?? new GrantsService(this.axios));
  }

  get authorization() {
    return (this.$authorization = this.$authorization ?? Authorization.build(this.axios));
  }

  get authentication() {
    return (this.$authentication =
      this.$authentication ?? Authentication.build(this.axios));
  }
}
