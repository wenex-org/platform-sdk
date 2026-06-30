import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Enrollment, EnrollmentDto } from '../../common/interfaces/education';

export class EnrollmentsService<Properties extends object = object> extends RestfulService<
  Enrollment<Properties>,
  EnrollmentDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('education/enrollments', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new EnrollmentsService<Properties>(axios, prefix || '/');
  }
}
