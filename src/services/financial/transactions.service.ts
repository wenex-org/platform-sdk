/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Transaction, TransactionDto } from '../../common/interfaces';

export class TransactionsService extends RestfulService<Transaction, TransactionDto> {
  constructor(protected axios: AxiosInstance) {
    super('transactions', axios);
  }
}
