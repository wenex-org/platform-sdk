import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Service, ServiceDto } from '../../common/interfaces/career';

export class ServicesService<Properties extends object = object> extends RestfulService<
  Service<Properties>,
  ServiceDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('career/services', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ServicesService<Properties>(axios);
  }
}
