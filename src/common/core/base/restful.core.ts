/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig } from 'axios';

import { Array, Filter, QueryFilter, Total } from '../../interfaces';
import { RequestService } from '../request.core';

export class RestfulService<Entity> extends RequestService {
  protected readonly url = (path: string) => `/${this.path}/${path}`;

  constructor(protected readonly path: string, protected client: AxiosInstance) {
    super(client);
  }

  count(filter: QueryFilter<Entity>, config?: AxiosRequestConfig) {
    const params = { filter, ...config?.params };
    return this.get<Total>(this.url('/count'), { ...config, params });
  }

  create(data: Entity, config?: AxiosRequestConfig) {
    return this.post<Entity>(this.url(''), data, config);
  }

  find(filter: Filter<Entity>, config?: AxiosRequestConfig) {
    const params = { filter, ...config?.params };
    return this.get<Array<Entity>>(this.url(''), { ...config, params });
  }

  findById(id: string, config?: AxiosRequestConfig) {
    return this.get<Entity>(this.url(id), config);
  }

  deleteById(id: string, config?: AxiosRequestConfig) {
    return this.delete<Entity>(this.url(id), config);
  }

  restoreById(id: string, config?: AxiosRequestConfig) {
    return this.put<Entity>(`${this.url(id)}/restore`, config);
  }

  destroyById(id: string, config?: AxiosRequestConfig) {
    return this.delete<Entity>(`${this.url(id)}/destroy`, config);
  }

  updateById(id: string, data: Entity, config?: AxiosRequestConfig) {
    return this.patch<Entity>(`${this.url(id)}`, data, config);
  }

  updateBulk(data: Entity, filter: QueryFilter<Entity>, config?: AxiosRequestConfig) {
    const params = { filter, ...config?.params };
    return this.patch<Total>('/bulk', data, { ...config, params });
  }
}
