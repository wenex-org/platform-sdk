import type { AxiosInstance } from 'axios';

import { RequestConfig, RestfulService } from '../../common/core/classes';
import { Account, AccountDto, Credential } from '../../common/interfaces/conjoint';

export class AccountsService<Properties extends object = object> extends RestfulService<
  Account<Properties>,
  AccountDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('conjoint/accounts', axios);
  }

  cred(config?: RequestConfig<Credential>): Promise<Credential> {
    return this.post<Credential, object>(this.url('cred'), {}, config);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new AccountsService<Properties>(axios);
  }
}
