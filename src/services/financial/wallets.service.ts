import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Wallet, WalletDto } from '../../common/interfaces/financial';

export class WalletsService<Properties extends object = object> extends RestfulService<Wallet<Properties>, WalletDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('financial/wallets', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new WalletsService<Properties>(axios, prefix || '/');
  }
}
