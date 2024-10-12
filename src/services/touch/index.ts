import { AxiosInstance } from 'axios';

import { MailsService } from './mails.service';
import { PushesService } from './pushes';

export * from './pushes';
export * from './mails.service';

export class TouchClient {
  protected $mails?: MailsService;
  protected $pushes?: PushesService;

  constructor(readonly axios: AxiosInstance) {}

  get mails() {
    return (this.$mails = this.$mails ?? new MailsService(this.axios));
  }

  get pushes() {
    return (this.$pushes = this.$pushes ?? new PushesService(this.axios));
  }
}
