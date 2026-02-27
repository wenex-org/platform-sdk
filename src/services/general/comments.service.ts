import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Comment, CommentDto } from '../../common/interfaces/general';

export class CommentsService<Properties extends object = object> extends RestfulService<
  Comment<Properties>,
  CommentDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('general/comments', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new CommentsService<Properties>(axios);
  }
}
