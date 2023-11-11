import type { AxiosInstance } from 'axios';

import { ConfigsService } from './configs.service';

export * from './configs.service';

export class ConfigClient {
  private $configs!: ConfigsService;

  constructor(protected client: AxiosInstance) {}

  get configs() {
    return (this.$configs = this.$configs ?? new ConfigsService(this.client));
  }
}
