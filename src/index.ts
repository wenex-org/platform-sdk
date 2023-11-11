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

  get config() {
    return (this.$config = this.$config ?? new ConfigClient(this.client));
  }

  get identity() {
    return (this.$identity = this.$identity ?? new IdentityClient(this.client));
  }
}
