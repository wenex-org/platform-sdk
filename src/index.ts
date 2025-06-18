import type { AxiosInstance } from 'axios';

import * as Services from './services';
import { GraphqlService } from './common/core/classes';

export * from './services';

export class Platform<Properties extends object = object> {
  protected _graphql?: GraphqlService;

  protected _auth?: Services.Auth.AuthClient<Properties>;
  protected _context?: Services.Context.ContextClient<Properties>;
  protected _domain?: Services.Domain.DomainClient<Properties>;
  protected _essential?: Services.Essential.EssentialClient<Properties>;
  protected _financial?: Services.Financial.FinancialClient<Properties>;
  protected _general?: Services.General.GeneralClient<Properties>;
  protected _identity?: Services.Identity.IdentityClient<Properties>;
  protected _special?: Services.Special.SpecialClient<Properties>;
  protected _touch?: Services.Touch.TouchClient<Properties>;
  protected _content?: Services.Content.ContentClient<Properties>;
  protected _logistic?: Services.Logistic.LogisticClient<Properties>;
  protected _conjoint?: Services.Conjoint.ConjointClient<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get auth() {
    return (this._auth = this._auth ?? Services.Auth.AuthClient.build<Properties>(this.axios));
  }

  get context() {
    return (this._context = this._context ?? Services.Context.ContextClient.build<Properties>(this.axios));
  }

  get domain() {
    return (this._domain = this._domain ?? Services.Domain.DomainClient.build<Properties>(this.axios));
  }

  get essential() {
    return (this._essential = this._essential ?? Services.Essential.EssentialClient.build<Properties>(this.axios));
  }

  get financial() {
    return (this._financial = this._financial ?? Services.Financial.FinancialClient.build<Properties>(this.axios));
  }

  get general() {
    return (this._general = this._general ?? Services.General.GeneralClient.build<Properties>(this.axios));
  }

  get identity() {
    return (this._identity = this._identity ?? Services.Identity.IdentityClient.build<Properties>(this.axios));
  }

  get special() {
    return (this._special = this._special ?? Services.Special.SpecialClient.build<Properties>(this.axios));
  }

  get touch() {
    return (this._touch = this._touch ?? Services.Touch.TouchClient.build<Properties>(this.axios));
  }

  get content() {
    return (this._content = this._content ?? Services.Content.ContentClient.build<Properties>(this.axios));
  }

  get logistic() {
    return (this._logistic = this._logistic ?? Services.Logistic.LogisticClient.build<Properties>(this.axios));
  }

  get conjoint() {
    return (this._conjoint = this._conjoint ?? Services.Conjoint.ConjointClient.build<Properties>(this.axios));
  }

  get graphql() {
    return (this._graphql = this._graphql ?? GraphqlService.build(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Platform<Properties>(axios);
  }
}
