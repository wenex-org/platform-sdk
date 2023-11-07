/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

import { RequestService } from '../request.core';
import { Array, Data, Filter, QueryFilter, Total } from '../../interfaces';

export class RestfulService<Entity> extends RequestService {
  protected readonly url = (path: string) => `/${this.path}/${path}`;

  constructor(
    protected readonly path: string,
    protected readonly client: AxiosInstance,
  ) {
    super(client);
  }

  count(filter: QueryFilter<Entity>, config?: AxiosRequestConfig): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.get<Total>(this.url('/count'), { ...config, params });
  }

  create(data: Entity, config?: AxiosRequestConfig): AxiosPromise<Entity> {
    return this.post<Entity>(this.url(''), data, config);
  }

  find(filter: Filter<Entity>, config?: AxiosRequestConfig): AxiosPromise<Array<Entity>> {
    const params = { filter, ...config?.params };
    return this.get<Array<Entity>>(this.url(''), { ...config, params });
  }

  findById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Entity>> {
    return this.get<Data<Entity>>(this.url(id), config);
  }

  deleteById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Entity>> {
    return this.delete<Data<Entity>>(this.url(id), config);
  }

  restoreById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Entity>> {
    return this.put<Data<Entity>>(`${this.url(id)}/restore`, undefined, config);
  }

  destroyById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Entity>> {
    return this.delete<Data<Entity>>(`${this.url(id)}/destroy`, config);
  }

  updateById(
    id: string,
    data: Entity,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Data<Entity>> {
    return this.patch<Data<Entity>>(`${this.url(id)}`, data, config);
  }

  updateBulk(
    data: Entity,
    filter: QueryFilter<Entity>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.patch<Total>('/bulk', data, { ...config, params });
  }
}
