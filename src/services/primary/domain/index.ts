import { AxiosInstance } from 'axios';

import { AppsService } from './apps.service';
import { ClientsService } from './clients.service';

export * from './apps.service';
export * from './clients.service';

export class DomainClient {
  private $apps!: AppsService;
  private $clients!: ClientsService;

  constructor(protected client: AxiosInstance) {}

  get apps() {
    return (this.$apps = this.$apps ?? new AppsService(this.client));
  }

  get clients() {
    return (this.$clients = this.$clients ?? new ClientsService(this.client));
  }
}
