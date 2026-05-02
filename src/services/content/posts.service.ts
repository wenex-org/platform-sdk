import type { AxiosInstance } from 'axios';

import { Data } from '../../common/core/interfaces';
import { getParams } from '../../common/core/utils';
import { RestfulService } from '../../common/core/classes';
import { Filter } from '../../common/core/interfaces/mongo';
import { Post, PostDto } from '../../common/interfaces/content';
import { RequestConfig, ResponseType } from '../../common/core/types';
import { SearchRequest, SearchResponse } from '../../common/core/interfaces/elastic';

export class PostsService<Properties extends object = object> extends RestfulService<Post<Properties>, PostDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('content/posts', axios, pathPrefix);
  }

  async search<C extends RequestConfig<Post<Properties>> = RequestConfig<Post<Properties>>>(
    filter: Filter<Post<Properties>>,
    request: SearchRequest,
    config?: C,
  ): Promise<ResponseType<Data<SearchResponse<Post<Properties>>>, SearchResponse<Post<Properties>>, C>> {
    const params = await getParams(config, filter);

    type Response = ResponseType<Data<SearchResponse<Post<Properties>>>, SearchResponse<Post<Properties>>, C>;

    const response = await this.post<Data<SearchResponse<Post<Properties>>>, SearchRequest>(this.url('search'), request, {
      ...config,
      params,
    });

    return (config?.fullResponse ? response : response.data) as Response;
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new PostsService<Properties>(axios, prefix || '/');
  }
}
