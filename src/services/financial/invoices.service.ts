import type { AxiosInstance } from 'axios';

import { Data, Serializer } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { Transaction, Invoice, InvoiceDto } from '../../common/interfaces/financial';

export class InvoicesService<Properties extends object = object> extends RestfulService<
  Invoice<Properties>,
  InvoiceDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('invoices', axios);
  }

  async payment<Path extends object = object>(
    id: string,
    config?: RequestConfig<Invoice<Properties>>,
  ): Promise<Serializer<Transaction<Properties>, Path>> {
    return (await this.get<Data<Serializer<Transaction<Properties>, Path>>>(this.url(`${id}/payment`), config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new InvoicesService<Properties>(axios);
  }
}
