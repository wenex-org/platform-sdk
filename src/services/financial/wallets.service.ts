import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Wallet, WalletDto } from '../../common/interfaces/financial';

export class WalletsService<Properties extends object = object> extends RestfulService<Wallet<Properties>, WalletDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('financial/wallets', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new WalletsService<Properties>(axios);
  }
}
