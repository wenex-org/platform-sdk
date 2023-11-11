import { AxiosInstance } from 'axios';

import { Client } from '../../common/interfaces';
import { RestfulService } from '../../common/core';

export class ClientsService extends RestfulService<Client> {
  constructor(protected client: AxiosInstance) {
    super('clients', client);
  }
}
