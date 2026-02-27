import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Notice, NoticeDto } from '../../common/interfaces/touch';

export class NoticesService<Properties extends object = object> extends RestfulService<Notice<Properties>, NoticeDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('touch/notices', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new NoticesService<Properties>(axios);
  }
}
