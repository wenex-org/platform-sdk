import { AxiosInstance } from 'axios';

import { ClientsService } from './clients.service';
import { AppsService } from './apps.service';

export * from './apps.service';
export * from './clients.service';

export class DomainClient {
  private $apps!: AppsService;
  private $clients!: ClientsService;

  constructor(readonly axios: AxiosInstance) {}

  get apps() {
    return (this.$apps = this.$apps ?? new AppsService(this.axios));
  }

  get clients() {
    return (this.$clients = this.$clients ?? new ClientsService(this.axios));
  }
}
