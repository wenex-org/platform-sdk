import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Client, ClientDto } from '../../common/interfaces';

export class ClientsService extends RestfulService<Client, ClientDto> {
  constructor(protected client: AxiosInstance) {
    super('clients', client);
  }
}
