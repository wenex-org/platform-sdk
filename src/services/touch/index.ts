import { AxiosInstance } from 'axios';

import { MailsService } from './mails.service';
import { PushService } from './push';

export * from './push';
export * from './mails.service';

export class TouchClient {
  private $push!: PushService;
  private $mails!: MailsService;

  constructor(readonly axios: AxiosInstance) {}

  get mails() {
    return (this.$mails = this.$mails ?? new MailsService(this.axios));
  }

  get push() {
    return (this.$push = this.$push ?? new PushService(this.axios));
  }
}
