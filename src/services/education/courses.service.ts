import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Course, CourseDto } from '../../common/interfaces/education';

export class CoursesService<Properties extends object = object> extends RestfulService<Course<Properties>, CourseDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('education/courses', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new CoursesService<Properties>(axios, prefix || '/');
  }
}
