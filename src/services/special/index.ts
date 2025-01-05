import type { AxiosInstance } from 'axios';

import { StatsService } from './stats.service';

export * from './stats.service';

export class SpecialClient<Properties extends object = object> {
  protected _stats?: StatsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get stats() {
    return (this._stats = this._stats ?? new StatsService<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new SpecialClient<Properties>(axios);
  }
}
