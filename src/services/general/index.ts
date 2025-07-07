import type { AxiosInstance } from 'axios';

import { ArtifactsService } from './artifacts.service';
import { WorkflowsService } from './workflows.service';
import { ActivitiesService } from './activities.service';

export * from './artifacts.service';
export * from './workflows.service';
export * from './activities.service';

export class Client<Properties extends object = object> {
  protected _artifacts?: ArtifactsService<Properties>;
  protected _workflows?: WorkflowsService<Properties>;
  protected _activities?: ActivitiesService<Properties>;

  constructor(readonly axios: AxiosInstance) {}

  get artifacts() {
    return (this._artifacts = this._artifacts ?? ArtifactsService.build<Properties>(this.axios));
  }

  get workflows() {
    return (this._workflows = this._workflows ?? WorkflowsService.build<Properties>(this.axios));
  }

  get activities() {
    return (this._activities = this._activities ?? ActivitiesService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
