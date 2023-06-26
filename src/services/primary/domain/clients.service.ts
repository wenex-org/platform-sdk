import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { Client } from '../../../common/interfaces';

export class ClientsService extends RestfulService<Client> {
  constructor(protected client: AxiosInstance) {
    super('clients', client);
  }
}
