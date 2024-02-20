/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Wallet, WalletDto } from '../../common/interfaces';

export class WalletsService extends RestfulService<Wallet, WalletDto> {
  constructor(protected axios: AxiosInstance) {
    super('wallets', axios);
  }
}
