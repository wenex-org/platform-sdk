/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Account, AccountDto } from '../../common/interfaces';

export class AccountsService extends RestfulService<Account, AccountDto> {
  constructor(protected axios: AxiosInstance) {
    super('accounts', axios);
  }
}
