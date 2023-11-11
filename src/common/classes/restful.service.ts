/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

import {
  Core,
  Data,
  Dto,
  Filter,
  Items,
  QueryFilter,
  Serializer,
  Total,
} from '../interfaces';
import { RequestService } from '../providers';

export class RestfulService<
  T extends Core,
  D extends Dto<T>,
  S extends Serializer<T> = Serializer<T>,
> extends RequestService {
  protected readonly url = (path: string) => `/${this.name}/${path}`;

  constructor(
    protected readonly name: string,
    protected readonly client: AxiosInstance,
  ) {
    super(client);
  }

  count(filter: QueryFilter<Dto<D>>, config?: AxiosRequestConfig): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.get<Total>(this.url('/count'), { ...config, params });
  }

  create(data: Dto<D>, config?: AxiosRequestConfig): AxiosPromise<Serializer<S>> {
    return this.post<Serializer<S>, Dto<D>>(this.url(''), data, config);
  }

  createBulk(
    data: Dto<D>[],
    config?: AxiosRequestConfig,
  ): AxiosPromise<Items<Serializer<S>>> {
    return this.post<Items<Serializer<S>>, Dto<D>[]>(this.url(''), data, config);
  }

  find(
    filter: Filter<T>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Items<Serializer<S>>> {
    const params = { filter, ...config?.params };
    return this.get<Items<Serializer<S>>>(this.url(''), { ...config, params });
  }

  findById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>> {
    return this.get<Data<Serializer<S>>>(this.url(id), config);
  }

  deleteById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>> {
    return this.delete<Data<Serializer<S>>>(this.url(id), config);
  }

  restoreById(
    id: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Data<Serializer<S>>> {
    return this.put<Data<Serializer<S>>, undefined>(
      `${this.url(id)}/restore`,
      undefined,
      config,
    );
  }

  destroyById(
    id: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Data<Serializer<S>>> {
    return this.delete<Data<Serializer<S>>>(`${this.url(id)}/destroy`, config);
  }

  updateById(
    id: string,
    data: Dto<D>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Data<Serializer<S>>> {
    return this.patch<Data<Serializer<S>>, Dto<D>>(`${this.url(id)}`, data, config);
  }

  updateBulk(
    data: Dto<D>,
    filter: QueryFilter<T>,
    config?: AxiosRequestConfig,
  ): AxiosPromise<Total> {
    const params = { filter, ...config?.params };
    return this.patch<Total, Dto<D>>('/bulk', data, { ...config, params });
  }
}
