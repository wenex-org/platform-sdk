import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Branch, BranchDto } from '../../common/interfaces/career';

export class BranchesService<Properties extends object = object> extends RestfulService<Branch<Properties>, BranchDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('career/branches', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new BranchesService<Properties>(axios);
  }
}
