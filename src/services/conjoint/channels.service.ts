import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Channel, ChannelDto } from '../../common/interfaces/conjoint';

export class ChannelsService<Properties extends object = object> extends RestfulService<
  Channel<Properties>,
  ChannelDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('conjoint/channels', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ChannelsService<Properties>(axios);
  }
}
