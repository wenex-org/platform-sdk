import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Submission, SubmissionDto } from '../../common/interfaces/education';

export class SubmissionsService<Properties extends object = object> extends RestfulService<Submission<Properties>, SubmissionDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('education/submissions', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new SubmissionsService<Properties>(axios, prefix || '/');
  }
}
