import type { AxiosInstance } from 'axios';

import { WalletsService } from './wallets.service';
import { AccountsService } from './accounts.service';
import { InvoicesService } from './invoices.service';
import { CurrenciesService } from './currencies.service';
import { TransactionsService } from './transactions.service';

export * from './wallets.service';
export * from './accounts.service';
export * from './invoices.service';
export * from './currencies.service';
export * from './transactions.service';

export class Client<Properties extends object = object> {
  protected _wallets?: WalletsService<Properties>;
  protected _accounts?: AccountsService<Properties>;
  protected _invoices?: InvoicesService<Properties>;
  protected _currencies?: CurrenciesService<Properties>;
  protected _transactions?: TransactionsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get wallets() {
    return (this._wallets = this._wallets ?? WalletsService.build<Properties>(this.axios));
  }

  get accounts() {
    return (this._accounts = this._accounts ?? AccountsService.build<Properties>(this.axios));
  }

  get invoices() {
    return (this._invoices = this._invoices ?? InvoicesService.build<Properties>(this.axios));
  }

  get currencies() {
    return (this._currencies = this._currencies ?? CurrenciesService.build<Properties>(this.axios));
  }

  get transactions() {
    return (this._transactions = this._transactions ?? TransactionsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
