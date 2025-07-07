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

  constructor(readonly axios: AxiosInstance) {}

  get smss() {
    return (this._smss = this._smss ?? new SmssService<any, Properties>(this.axios));
  }

  get pushes() {
    return (this._pushes = this._pushes ?? new PushesService<Properties>(this.axios));
  }

  get emails() {
    return (this._emails = this._emails ?? new EmailsService<Properties>(this.axios));
  }

  get notices() {
    return (this._notices = this._notices ?? new NoticesService<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
