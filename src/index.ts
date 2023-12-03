import type { AxiosInstance } from 'axios';

import { GraphqlService } from './common/classes';
import { AuthClient, ConfigClient, DomainClient, IdentityClient } from './services';

export * from './services';

export class PlatformClient {
  private $graphql!: GraphqlService;

  private $auth!: AuthClient;
  private $config!: ConfigClient;
  private $domain!: DomainClient;
  private $identity!: IdentityClient;

  constructor(readonly axios: AxiosInstance) {}

  get graphql() {
    return (this.$graphql = this.$graphql ?? new GraphqlService(this.axios));
  }

  get auth() {
    return (this.$auth = this.$auth ?? new AuthClient(this.axios));
  }

  get domain() {
    return (this.$domain = this.$domain ?? new DomainClient(this.axios));
  }

  get config() {
    return (this.$config = this.$config ?? new ConfigClient(this.axios));
  }

  get identity() {
    return (this.$identity = this.$identity ?? new IdentityClient(this.axios));
  }
}
