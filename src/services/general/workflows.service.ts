import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Workflow, WorkflowDto } from '../../common/interfaces/general';

export class WorkflowsService<Properties extends object = object> extends RestfulService<
  Workflow<Properties>,
  WorkflowDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('workflows', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new WorkflowsService<Properties>(axios);
  }
}
