import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Account, AccountDto, Credential } from '../../common/interfaces/conjoint';

export class AccountsService<Properties extends object = object> extends RestfulService<
  Account<Properties>,
  AccountDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('conjoint/accounts', axios, pathPrefix);
  }

  cred(config?: RequestConfig<Credential>): Promise<Credential> {
    return this.post<Credential, object>(this.url('cred'), {}, config);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new AccountsService<Properties>(axios, prefix || '/');
  }
}
