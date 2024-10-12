import { AxiosInstance } from 'axios';

import { SagasService } from './sagas';
import { FilesService } from './files.service';
import { StatsService } from './stats.service';

export * from './sagas';
export * from './stats.service';
export * from './files.service';

export class SpecialClient {
  protected $files?: FilesService;
  protected $stats?: StatsService;
  protected $sagas?: SagasService;

  constructor(readonly axios: AxiosInstance) {}

  get files() {
    return (this.$files = this.$files ?? new FilesService(this.axios));
  }

  get stats() {
    return (this.$stats = this.$stats ?? new StatsService(this.axios));
  }

  get sagas() {
    return (this.$sagas = this.$sagas ?? new SagasService(this.axios));
  }
}
