import type { AxiosInstance } from 'axios';

import { Data } from '../../common/core/interfaces';
import { getParams } from '../../common/core/utils';
import { RestfulService } from '../../common/core/classes';
import { Filter } from '../../common/core/interfaces/mongo';
import { Product, ProductDto } from '../../common/interfaces/career';
import { RequestConfig, ResponseType } from '../../common/core/types';
import { SearchRequest, SearchResponse } from '../../common/core/interfaces/elastic';

export class ProductsService<Properties extends object = object> extends RestfulService<
  Product<Properties>,
  ProductDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('career/products', axios, pathPrefix);
  }

  async search<C extends RequestConfig<Product<Properties>> = RequestConfig<Product<Properties>>>(
    request: SearchRequest,
    filter: Filter<Product<Properties>>,
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

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ProductsService<Properties>(axios);
  }
}
