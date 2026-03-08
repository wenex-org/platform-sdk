import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Post, PostDto } from '../../common/interfaces/content';

export class PostsService<Properties extends object = object> extends RestfulService<Post<Properties>, PostDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('content/posts', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new PostsService<Properties>(axios, prefix || '/');
  }
}
