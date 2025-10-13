import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { RestfulService } from '../../common/core/classes';
import { Data, Serializer } from '../../common/core/interfaces';
import { Email, EmailDto, EmailSendDto } from '../../common/interfaces/touch';

export class EmailsService<Properties extends object = object> extends RestfulService<Email<Properties>, EmailDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('touch/emails', axios);
  }

  async send(data: EmailSendDto<Properties>, config?: RequestConfig<Email<Properties>>): Promise<Serializer<Email<Properties>>> {
    return (await this.post<Data<Serializer<Email<Properties>>>, EmailSendDto<Properties>>(this.url('send'), data, config)).data;
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new EmailsService<Properties>(axios);
  }
}
