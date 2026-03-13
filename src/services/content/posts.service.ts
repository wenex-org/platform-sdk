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
    request: SearchRequest,
    filter: Filter<Post<Properties>>,
    config?: C,
  ): Promise<ResponseType<Data<SearchResponse>, SearchResponse, C>> {
    const params = await getParams(config, filter);
    type Response = ResponseType<Data<SearchResponse>, SearchResponse, C>;
    const response = await this.post<Data<SearchResponse>, SearchRequest>(this.url('search'), request, { ...config, params });
    return (config?.fullResponse ? response : response.data) as Response;
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new PostsService<Properties>(axios, prefix || '/');
  }
}
