/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Coin, CoinDto } from '../../common/interfaces';

export class CoinsService extends RestfulService<Coin, CoinDto> {
  constructor(protected axios: AxiosInstance) {
    super('coins', axios);
  }
}
