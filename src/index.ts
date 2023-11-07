import { AxiosInstance } from 'axios';

import { GraphqlService } from './common/core';
import { AuthClient, ConfigsService, DomainClient, IdentityClient } from './services';

export * from './services';

export class PlatformClient {
  private $graphql!: GraphqlService;

  private $auth!: AuthClient;
  private $domain!: DomainClient;
  private $configs!: ConfigsService;
  private $identity!: IdentityClient;

  constructor(protected client: AxiosInstance) {}

  get graphql() {
    return (this.$graphql = this.$graphql ?? new GraphqlService(this.client));
  }

  get auth() {
    return (this.$auth = this.$auth ?? new AuthClient(this.client));
  }

  get domain() {
    return (this.$domain = this.$domain ?? new DomainClient(this.client));
  }

  get configs() {
    return (this.$configs = this.$configs ?? new ConfigsService(this.client));
  }

  get identity() {
    return (this.$identity = this.$identity ?? new IdentityClient(this.client));
  }
}
