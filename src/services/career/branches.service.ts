import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Branch, BranchDto } from '../../common/interfaces/career';

export class BranchesService<Properties extends object = object> extends RestfulService<Branch<Properties>, BranchDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/branches', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new BranchesService<Properties>(axios, prefix || '/');
  }
}
