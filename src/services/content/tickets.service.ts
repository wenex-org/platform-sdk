import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Ticket, TicketDto } from '../../common/interfaces/content';

export class TicketsService<Properties extends object = object> extends RestfulService<Ticket<Properties>, TicketDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('tickets', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new TicketsService<Properties>(axios);
  }
}
