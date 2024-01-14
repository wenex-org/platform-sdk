import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Mail, MailDto } from '../../common/interfaces';

export class MailsService extends RestfulService<Mail, MailDto> {
  constructor(protected axios: AxiosInstance) {
    super('mails', axios);
  }
}
