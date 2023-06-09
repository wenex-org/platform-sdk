import { AxiosInstance } from 'axios';

import { AuthClient, ConfigsService, DomainClient, GeneralClient, IdentityClient } from './services';

export * from './services';

export class PlatformClient {
  private $auth!: AuthClient;
  private $domain!: DomainClient;
  private $general!: GeneralClient;
  private $identity!: IdentityClient;

  private $configs!: ConfigsService;

  constructor(protected client: AxiosInstance) {}

  get auth() {
    return (this.$auth = this.$auth ?? new AuthClient(this.client));
  }

  get domain() {
    return (this.$domain = this.$domain ?? new DomainClient(this.client));
  }

  get general() {
    return (this.$general = this.$general ?? new GeneralClient(this.client));
  }

  get identity() {
    return (this.$identity = this.$identity ?? new DomainClient(this.client));
  }

  get configs() {
    return (this.$configs = this.$configs ?? new ConfigsService(this.client));
  }
}
