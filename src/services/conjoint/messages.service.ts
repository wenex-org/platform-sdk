import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Message, MessageDto } from '../../common/interfaces/conjoint';

export class MessagesService<T = any, Properties extends object = object> extends RestfulService<
  Message<T, Properties>,
  MessageDto<T, Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('conjoint/messages', axios);
  }

  static build<T = any, Properties extends object = object>(axios: AxiosInstance) {
    return new MessagesService<T, Properties>(axios);
  }
}
