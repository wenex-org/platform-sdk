import type { AxiosInstance } from 'axios';

import { AuthsService } from './auths.service';
import { GrantsService } from './grants.service';

export * from './auths.service';
export * from './grants.service';

export class Client<Properties extends object = object> {
  protected _auths?: AuthsService;
  protected _grants?: GrantsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get auths() {
    return (this._auths = this._auths ?? AuthsService.build(this.axios));
  }

  get grants() {
    return (this._grants = this._grants ?? GrantsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
