/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

import { RequestService } from './request.core';
import { Array, Data, Filter, QueryFilter, Total } from '../interfaces';

export class RestfulService<Dto, Serializer> extends RequestService {
  protected readonly url = (path: string) => `/${this.name}/${path}`;

  constructor(
    protected readonly name: string,
    protected readonly client: AxiosInstance,
  ) {
    super(client);
  }

  count(filter: QueryFilter<Dto>, config?: AxiosRequestConfig): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.get<Total>(this.url('/count'), { ...config, params });
  }

  create(data: Dto, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.post<T>(this.url(''), data, config);
  }

  createBulk(data: T[], config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.post<T>(this.url(''), data, config);
  }

  find(filter: Filter<T>, config?: AxiosRequestConfig): AxiosPromise<Array<T>> {
    const params = { filter, ...config?.params };
    return this.get<Array<T>>(this.url(''), { ...config, params });
  }

  findById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<T>> {
    return this.get<Data<T>>(this.url(id), config);
  }

  deleteById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<T>> {
    return this.delete<Data<T>>(this.url(id), config);
  }

  restoreById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<T>> {
    return this.put<Data<T>>(`${this.url(id)}/restore`, undefined, config);
  }

  destroyById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<T>> {
    return this.delete<Data<T>>(`${this.url(id)}/destroy`, config);
  }

  updateById(id: string, data: T, config?: AxiosRequestConfig): AxiosPromise<Data<T>> {
    return this.patch<Data<T>>(`${this.url(id)}`, data, config);
  }

  updateBulk(
    data: T,
    filter: QueryFilter<T>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.patch<Total>('/bulk', data, { ...config, params });
  }
}
