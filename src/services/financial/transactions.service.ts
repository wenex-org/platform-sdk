import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Data, Serializer } from '../../common/core/interfaces';
import { Transaction, TransactionDto, TransactionInitDto } from '../../common/interfaces/financial';

export class TransactionsService<Properties extends object = object> extends RestfulService<
  Transaction<Properties>,
  TransactionDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('financial/transactions', axios);
  }

  async init(
    data: TransactionInitDto<Properties>,
    config?: RequestConfig<Transaction<Properties>>,
  ): Promise<Serializer<Transaction<Properties>>> {
    return (
      await this.post<Data<Serializer<Transaction<Properties>>>, TransactionInitDto<Properties>>(this.url('init'), data, config)
    ).data;
  }

  async abort<Path extends object = object>(
    id: string,
    config?: RequestConfig<Transaction<Properties>>,
  ): Promise<Serializer<Transaction<Properties>, Path>> {
    return (await this.get<Data<Serializer<Transaction<Properties>, Path>>>(this.url(`${id}/abort`), config)).data;
  }

  async verify<Path extends object = object>(
    id: string,
    config?: RequestConfig<Transaction<Properties>>,
  ): Promise<Serializer<Transaction<Properties>, Path>> {
    return (await this.get<Data<Serializer<Transaction<Properties>, Path>>>(this.url(`${id}/verify`), config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new TransactionsService<Properties>(axios);
  }
}
