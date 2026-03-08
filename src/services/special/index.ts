import type { AxiosInstance } from 'axios';

import { FilesService } from './files.service';
import { StatsService } from './stats.service';

export * from './files.service';
export * from './stats.service';

export class Client<Properties extends object = object> {
  protected _files?: FilesService<Properties>;
  protected _stats?: StatsService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get files() {
    return (this._files = this._files ?? FilesService.build<Properties>(this.axios, this.pathPrefix));
  }

  get stats() {
    return (this._stats = this._stats ?? StatsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
