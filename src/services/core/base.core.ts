/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosPromise, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';

import { Array, Filter, QueryFilter, Total } from '../../common/interfaces';
import { RequestService } from './request.core';

export interface BaseServiceOptions<Filter> {
  filter?: Filter;
  config?: AxiosRequestConfig;
}

export class BaseService extends RequestService {
  constructor(protected readonly options?: CreateAxiosDefaults) {
    super(axios.create(options));
  }

  count<T>(filter: QueryFilter<T>, config?: AxiosRequestConfig): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.get<Total>(config?.url ?? '/count', { ...config, params });
  }

  create<T>(data: any, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.post<T>(config?.url ?? '/', data, config);
  }

  find<T>(filter: Filter<T>, config?: AxiosRequestConfig): AxiosPromise<Array<T>> {
    const params = { filter, ...config?.params };
    return this.get<Array<T>>(config?.url ?? '/', { ...config, params });
  }

  findById<T>(id: string, options?: BaseServiceOptions): AxiosPromise<T> {
    return this.get<T>((config?.url ?? '/') + id, config);
  }

  deleteById<T>(id: string, options?: BaseServiceOptions): AxiosPromise<T> {
    return this.delete<T>((config?.url ?? '/') + id, config);
  }

  restoreById<T>(id: string, options?: BaseServiceOptions): AxiosPromise<T> {
    return this.put<T>((config?.url ?? '/') + `${id}/restore`, config);
  }

  destroyById<T>(id: string, options?: BaseServiceOptions): AxiosPromise<T> {
    return this.delete<T>((config?.url ?? '/') + `${id}/destroy`, config);
  }

  updateById<T>(data: any, id: string, options?: BaseServiceOptions): AxiosPromise<T> {
    return this.patch<T>((config?.url ?? '/') + id, data, config);
  }

  updateBulk<T>(data: any, filter: QueryFilter<T>, options?: BaseServiceOptions): AxiosPromise<T> {
    return this.patch<T>(config?.url ?? '/bulk', { data, filter }, config);
  }
}
