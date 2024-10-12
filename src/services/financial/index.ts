import { AxiosInstance } from 'axios';

import { CoinsService } from './coins.service';
import { WalletsService } from './wallets.service';
import { AccountsService } from './accounts.service';
import { TransactionsService } from './transactions.service';

export * from './coins.service';
export * from './wallets.service';
export * from './accounts.service';
export * from './transactions.service';

export class FinancialClient {
  protected $coins?: CoinsService;
  protected $wallets?: WalletsService;
  protected $accounts?: AccountsService;
  protected $transactions?: TransactionsService;

  constructor(readonly axios: AxiosInstance) {}

  get coins() {
    return (this.$coins = this.$coins ?? new CoinsService(this.axios));
  }

  get wallets() {
    return (this.$wallets = this.$wallets ?? new WalletsService(this.axios));
  }

  get accounts() {
    return (this.$accounts = this.$accounts ?? new AccountsService(this.axios));
  }

  get transactions() {
    return (this.$transactions =
      this.$transactions ?? new TransactionsService(this.axios));
  }
}
