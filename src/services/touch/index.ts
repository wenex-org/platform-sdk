import type { AxiosInstance } from 'axios';

import { SmssService } from './smss.service';
import { PushesService } from './pushes.service';
import { EmailsService } from './emails.service';
import { NoticesService } from './notices.service';

export * from './smss.service';
export * from './pushes.service';
export * from './emails.service';
export * from './notices.service';

export class Client<Properties extends object = object> {
  protected _smss?: SmssService<any, Properties>;
  protected _pushes?: PushesService<Properties>;
  protected _emails?: EmailsService<Properties>;
  protected _notices?: NoticesService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get smss() {
    return (this._smss = this._smss ?? SmssService.build<any, Properties>(this.axios, this.pathPrefix));
  }

  get pushes() {
    return (this._pushes = this._pushes ?? PushesService.build<Properties>(this.axios, this.pathPrefix));
  }

  get emails() {
    return (this._emails = this._emails ?? EmailsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get notices() {
    return (this._notices = this._notices ?? NoticesService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
