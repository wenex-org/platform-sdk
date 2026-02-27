import type { AxiosInstance } from 'axios';

import { Data } from '../../common/core/interfaces';
import { getParams } from '../../common/core/utils';
import { RestfulService } from '../../common/core/classes';
import { Filter } from '../../common/core/interfaces/mongo';
import { RequestConfig, ResponseType } from '../../common/core/types';
import { Message, MessageDto } from '../../common/interfaces/conjoint';
import { SearchRequest, SearchResponse } from '../../common/core/interfaces/elastic';

export class MessagesService<T = any, Properties extends object = object> extends RestfulService<
  Message<T, Properties>,
  MessageDto<T, Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('conjoint/messages', axios, pathPrefix);
  }

  async search<C extends RequestConfig<Message<T, Properties>> = RequestConfig<Message<T, Properties>>>(
    request: SearchRequest,
    filter: Filter<T>,
    config?: C,
  ): Promise<ResponseType<Data<SearchResponse>, SearchResponse, C>> {
    const params = await getParams(config, filter);
    type Response = ResponseType<Data<SearchResponse>, SearchResponse, C>;
    if (!config?.fullResponse) {
      return (await this.post<Data<SearchResponse>, SearchRequest>(this.url('search'), request, { ...config, params }))
        .data as Response;
    } else
      return (await this.post<Data<SearchResponse>, SearchRequest>(this.url('search'), request, { ...config, params })) as Response;
  }

  static build<T = any, Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new MessagesService<T, Properties>(axios, prefix);
  }
}
