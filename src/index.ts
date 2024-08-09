import type { AxiosInstance } from 'axios';

import {
  AuthClient,
  ConfigClient,
  DomainClient,
  IdentityClient,
  SpecialClient,
  TouchClient,
  FinancialClient,
  LogisticClient,
} from './services';
import { GraphqlService } from './common/classes';

export * from './services';

export class PlatformClient {
  private $graphql!: GraphqlService;

  private $auth!: AuthClient;
  private $touch!: TouchClient;
  private $config!: ConfigClient;
  private $domain!: DomainClient;
  private $special!: SpecialClient;
  private $identity!: IdentityClient;
  private $logistic!: LogisticClient;
  private $financial!: FinancialClient;

  constructor(readonly axios: AxiosInstance) {}

  get graphql() {
    return (this.$graphql = this.$graphql ?? new GraphqlService(this.axios));
  }

  get auth() {
    return (this.$auth = this.$auth ?? new AuthClient(this.axios));
  }

  get touch() {
    return (this.$touch = this.$touch ?? new TouchClient(this.axios));
  }

  get domain() {
    return (this.$domain = this.$domain ?? new DomainClient(this.axios));
  }

  get config() {
    return (this.$config = this.$config ?? new ConfigClient(this.axios));
  }

  get special() {
    return (this.$special = this.$special ?? new SpecialClient(this.axios));
  }

  get identity() {
    return (this.$identity = this.$identity ?? new IdentityClient(this.axios));
  }

  get logistic() {
    return (this.$logistic = this.$logistic ?? new LogisticClient(this.axios));
  }

  get financial() {
    return (this.$financial = this.$financial ?? new FinancialClient(this.axios));
  }
}
