/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

import { Array, Filter, QueryFilter, Total } from '../../../common/interfaces';
import { RequestService } from '../request.core';

export class RestfulService extends RequestService {
  constructor(protected readonly options?: CreateAxiosDefaults) {
    super(axios.create(options));
  }

  count<T>(filter: QueryFilter<T>, config?: AxiosRequestConfig): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.get<Total>('/count', { ...config, params });
  }

  create<T>(data: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.post<T>('/', data, config);
  }

  find<T>(filter: Filter<T>, config?: AxiosRequestConfig): AxiosPromise<Array<T>> {
    const params = { filter, ...config?.params };
    return this.get<Array<T>>('/', { ...config, params });
  }

  findById<T>(id: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.get<T>(`/${id}`, config);
  }

  deleteById<T>(id: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.delete<T>(`/${id}`, config);
  }

  restoreById<T>(id: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.put<T>(`/${id}/restore`, config);
  }

  destroyById<T>(id: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.delete<T>(`/${id}/destroy`, config);
  }

  updateById<T>(id: string, data: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.patch<T>(`/${id}`, data, config);
  }

  updateBulk<T>(data: any, filter: QueryFilter<T>, config?: AxiosRequestConfig): AxiosPromise<T> {
    const params = { filter, ...config?.params };
    return this.patch<T>('/bulk', data, { ...config, params });
  }
}
