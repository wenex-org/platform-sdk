import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Notice, NoticeDto } from '../../common/interfaces/touch';

export class NoticesService<Properties extends object = object> extends RestfulService<Notice<Properties>, NoticeDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('touch/notices', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new NoticesService<Properties>(axios);
  }
}
