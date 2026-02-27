import type { AxiosInstance } from 'axios';

import { EventsService } from './events.service';
import { CommentsService } from './comments.service';
import { ArtifactsService } from './artifacts.service';
import { WorkflowsService } from './workflows.service';
import { ActivitiesService } from './activities.service';

export * from './events.service';
export * from './comments.service';
export * from './artifacts.service';
export * from './workflows.service';
export * from './activities.service';

export class Client<Properties extends object = object> {
  protected _events?: EventsService<Properties>;
  protected _comments?: CommentsService<Properties>;
  protected _artifacts?: ArtifactsService<Properties>;
  protected _workflows?: WorkflowsService<Properties>;
  protected _activities?: ActivitiesService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get events() {
    return (this._events = this._events ?? EventsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get comments() {
    return (this._comments = this._comments ?? CommentsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get artifacts() {
    return (this._artifacts = this._artifacts ?? ArtifactsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get workflows() {
    return (this._workflows = this._workflows ?? WorkflowsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get activities() {
    return (this._activities = this._activities ?? ActivitiesService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
