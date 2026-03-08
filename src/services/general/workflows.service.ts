import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Workflow, WorkflowDto } from '../../common/interfaces/general';

export class WorkflowsService<Properties extends object = object> extends RestfulService<
  Workflow<Properties>,
  WorkflowDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('general/workflows', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new WorkflowsService<Properties>(axios, prefix || '/');
  }
}
