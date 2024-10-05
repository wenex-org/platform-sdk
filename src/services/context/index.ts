import type { AxiosInstance } from 'axios';

import { ConfigsService } from './configs.service';
import { SettingsService } from './settings.service';

export * from './configs.service';

export class ContextClient {
  private $configs!: ConfigsService;
  private $settings!: SettingsService;

  constructor(readonly axios: AxiosInstance) {}

  get configs() {
    return (this.$configs = this.$configs ?? new ConfigsService(this.axios));
  }

  get settings() {
    return (this.$settings = this.$settings ?? new SettingsService(this.axios));
  }
}
