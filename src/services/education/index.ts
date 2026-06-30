import type { AxiosInstance } from 'axios';

import { CoursesService } from './courses.service';
import { EnrollmentsService } from './enrollments.service';

export * from './courses.service';
export * from './enrollments.service';

export class Client<Properties extends object = object> {
  protected _courses?: CoursesService<Properties>;
  protected _enrollments?: EnrollmentsService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get courses() {
    return (this._courses = this._courses ?? CoursesService.build<Properties>(this.axios, this.pathPrefix));
  }

  get enrollments() {
    return (this._enrollments = this._enrollments ?? EnrollmentsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
