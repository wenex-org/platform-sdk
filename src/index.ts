import type { AxiosInstance } from 'axios';

import * as Services from './services';
import { GraphqlService } from './common/core/classes';

export * from './services';

export class PlatformClient<Properties extends object = object> {
  protected _graphql?: GraphqlService;

  protected _auth?: Services.AuthClient<Properties>;
  protected _context?: Services.ContextClient<Properties>;
  protected _domain?: Services.DomainClient<Properties>;
  protected _essential?: Services.EssentialClient<Properties>;
  protected _identity?: Services.IdentityClient<Properties>;
  protected _special?: Services.SpecialClient<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get auth() {
    return (this._auth = this._auth ?? Services.AuthClient.build<Properties>(this.axios));
  }

  get context() {
    return (this._context = this._context ?? Services.ContextClient.build<Properties>(this.axios));
  }

  get domain() {
    return (this._domain = this._domain ?? Services.DomainClient.build<Properties>(this.axios));
  }

  get essential() {
    return (this._essential = this._essential ?? Services.EssentialClient.build<Properties>(this.axios));
  }

  get identity() {
    return (this._identity = this._identity ?? Services.IdentityClient.build<Properties>(this.axios));
  }

  get special() {
    return (this._special = this._special ?? Services.SpecialClient.build<Properties>(this.axios));
  }

  get graphql() {
    return (this._graphql = this._graphql ?? GraphqlService.build(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new PlatformClient<Properties>(axios);
  }
}
