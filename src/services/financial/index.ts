import { AxiosInstance } from 'axios';

import { CoinsService } from './coins.service';
import { WalletsService } from './wallets.service';
import { AccountsService } from './accounts.service';
import { TransactionsService } from './transactions.service';

export * from './coins.service';
export * from './wallets.service';
export * from './accounts.service';
export * from './transactions.service';

export class SpecialClient {
  private $coins!: CoinsService;
  private $wallets!: WalletsService;
  private $accounts!: AccountsService;
  private $transactions!: TransactionsService;

  constructor(readonly axios: AxiosInstance) {}

  get coins() {
    return (this.$coins = this.$coins ?? new CoinsService(this.axios));
  }
}
