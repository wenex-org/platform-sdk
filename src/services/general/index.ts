import type { AxiosInstance } from 'axios';

import { WorkflowsService } from './workflows.service';

export * from './workflows.service';

export class GeneralClient<Properties extends object = object> {
  protected _workflows?: WorkflowsService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get workflows() {
    return (this._workflows = this._workflows ?? WorkflowsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new GeneralClient<Properties>(axios);
  }
}
