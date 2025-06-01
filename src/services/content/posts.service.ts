import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Post, PostDto } from '../../common/interfaces/content';

export class PostsService<Properties extends object = object> extends RestfulService<Post<Properties>, PostDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('content/posts', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new PostsService<Properties>(axios);
  }
}
