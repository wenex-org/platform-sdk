import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Client, ClientDto } from '../../common/interfaces/domain';

export class ClientsService<Properties extends object = object> extends RestfulService<Client<Properties>, ClientDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('domain/clients', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ClientsService<Properties>(axios);
  }
}
