import { AxiosInstance } from 'axios';

import { ArtifactsService } from './artifacts.service';
import { WorkflowsService } from './workflows.service';

export * from './artifacts.service';
export * from './workflows.service';

export class GeneralClient {
  protected $artifacts?: ArtifactsService;
  protected $workflows?: WorkflowsService;

  constructor(readonly axios: AxiosInstance) {}

  get artifacts() {
    return (this.$artifacts = this.$artifacts ?? new ArtifactsService(this.axios));
  }

  get workflows() {
    return (this.$workflows = this.$workflows ?? new WorkflowsService(this.axios));
  }
}
