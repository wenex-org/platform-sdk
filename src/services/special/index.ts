import type { AxiosInstance } from 'axios';

import { FilesService } from './files.service';
import { StatsService } from './stats.service';

export * from './files.service';
export * from './stats.service';

export class Client<Properties extends object = object> {
  protected _files?: FilesService<Properties>;
  protected _stats?: StatsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get files() {
    return (this._files = this._files ?? new FilesService<Properties>(this.axios));
  }

  get stats() {
    return (this._stats = this._stats ?? new StatsService<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
