import type { AxiosInstance } from 'axios';

import { Mail, MailDto, Serializer } from '../../common/interfaces';
import { RequestConfig, RestfulService } from '../../common/classes';

export class MailsService extends RestfulService<Mail, MailDto> {
  constructor(protected axios: AxiosInstance) {
    super('mails', axios);
  }

  async send(data: MailDto, config?: RequestConfig<Mail>): Promise<Mail> {
    return this.post<Serializer<Mail>, MailDto>(this.url('send'), data, config);
  }
}
