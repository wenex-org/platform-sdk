import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Event, EventDto } from '../../common/interfaces/general';

export class EventsService<Properties extends object = object> extends RestfulService<Event<Properties>, EventDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('general/events', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new EventsService<Properties>(axios);
  }
}
