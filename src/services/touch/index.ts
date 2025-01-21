import type { AxiosInstance } from 'axios';

import { SmssService } from './smss.service';
import { EmailsService } from './emails.service';

export * from './smss.service';
export * from './emails.service';

export class TouchClient<Properties extends object = object> {
  protected _smss?: SmssService<any, Properties>;
  protected _emails?: EmailsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get smss() {
    return (this._smss = this._smss ?? new SmssService<any, Properties>(this.axios));
  }

  get emails() {
    return (this._emails = this._emails ?? new EmailsService<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new TouchClient<Properties>(axios);
  }
}
