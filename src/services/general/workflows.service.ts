import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Workflow, WorkflowDto } from '../../common/interfaces';

export class WorkflowsService extends RestfulService<Workflow, WorkflowDto> {
  constructor(protected axios: AxiosInstance) {
    super('workflows', axios);
  }
}
