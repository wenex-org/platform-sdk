import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Account, AccountDto } from '../../common/interfaces/financial';

export class AccountsService<Properties extends object = object> extends RestfulService<
  Account<Properties>,
  AccountDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('financial/accounts', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new AccountsService<Properties>(axios);
  }
}
