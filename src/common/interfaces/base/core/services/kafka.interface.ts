import { Observable } from 'rxjs';

import {
  RawUniqueFilter as UniqueFilter,
  RawQueryFilter as QueryFilter,
  RawOneFilter as OneFilter,
  RawFilter as Filter,
} from '../../filters';
import { KafkaObject, Total, Update } from '../../index';

export interface KafkaServiceOptions {
  key?: string;
  headers?: Record<string, any>;
}

export interface KafkaService<T> {
  count: (
    filter: QueryFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<Total>>;

  create: (
    data: T,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;

  find: (
    filter: Filter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<Array<T>>>;
  cursor: (
    filter: Filter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;

  findOne: (
    filter: OneFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;
  findById: (
    filter: UniqueFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;

  deleteOne: (
    filter: OneFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;
  deleteById: (
    filter: UniqueFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;

  restoreOne: (
    filter: OneFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;
  restoreById: (
    filter: UniqueFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;

  destroyOne: (
    filter: OneFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;
  destroyById: (
    filter: UniqueFilter,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;

  updateOne: (
    body: Update<T, OneFilter>,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;
  updateBulk: (
    body: Update<T, QueryFilter>,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<Total>>;
  updateById: (
    body: Update<T, UniqueFilter>,
    options?: KafkaServiceOptions,
  ) => Observable<KafkaObject<T>>;
}

export type KafkaServiceInterface<T> = KafkaService<T>;
