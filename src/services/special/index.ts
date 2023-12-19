import { AxiosInstance } from 'axios';

import { FilesService } from './files.service';
import { StatsService } from './stats.service';

export * from './stats.service';
export * from './files.service';

export class SpecialClient {
  private $files!: FilesService;
  private $stats!: StatsService;

  constructor(readonly axios: AxiosInstance) {}

  get files() {
    return (this.$files = this.$files ?? new StatsService(this.axios));
  }

  get stats() {
    return (this.$stats = this.$stats ?? new FilesService(this.axios));
  }
}
