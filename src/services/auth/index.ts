import type { AxiosInstance } from 'axios';

import { AptsService } from './apts.service';
import { AuthsService } from './auths.service';
import { GrantsService } from './grants.service';

export * from './apts.service';
export * from './auths.service';
export * from './grants.service';

export class Client<Properties extends object = object> {
  protected _apts?: AptsService<Properties>;
  protected _auths?: AuthsService;
  protected _grants?: GrantsService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get apts() {
    return (this._apts = this._apts ?? AptsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get auths() {
    return (this._auths = this._auths ?? AuthsService.build(this.axios, this.pathPrefix));
  }

  get grants() {
    return (this._grants = this._grants ?? GrantsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
