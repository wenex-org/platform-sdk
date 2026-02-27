import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Data, Serializer } from '../../common/core/interfaces';
import { Transaction, Invoice, InvoiceDto } from '../../common/interfaces/financial';

export class InvoicesService<Properties extends object = object> extends RestfulService<
  Invoice<Properties>,
  InvoiceDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('financial/invoices', axios, pathPrefix);
  }

  async payment<Path extends object = object>(
    id: string,
    config?: RequestConfig<Invoice<Properties>>,
  ): Promise<Serializer<Transaction<Properties>, Path>> {
    return (await this.get<Data<Serializer<Transaction<Properties>, Path>>>(this.url(`${id}/payment`), config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new InvoicesService<Properties>(axios, prefix || '/');
  }
}
