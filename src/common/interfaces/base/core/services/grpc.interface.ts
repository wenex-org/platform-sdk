import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

import {
  RawUniqueFilter as UniqueFilter,
  RawQueryFilter as QueryFilter,
  RawOneFilter as OneFilter,
  RawFilter as Filter,
} from '../../filters';
import { Array, Total, Update } from '../../index';

export interface GrpcService<T> {
  count: (filter: QueryFilter, meta?: Metadata) => Observable<Total>;

  create: (data: T, meta?: Metadata) => Observable<T>;

  find: (filter: Filter, meta?: Metadata) => Observable<Array<T>>;
  cursor: (filter: Filter, meta?: Metadata) => Observable<T>;

  findOne: (filter: OneFilter, meta?: Metadata) => Observable<T>;
  findById: (filter: UniqueFilter, meta?: Metadata) => Observable<T>;

  deleteOne: (filter: OneFilter, meta?: Metadata) => Observable<T>;
  deleteById: (filter: UniqueFilter, meta?: Metadata) => Observable<T>;

  restoreOne: (filter: OneFilter, meta?: Metadata) => Observable<T>;
  restoreById: (filter: UniqueFilter, meta?: Metadata) => Observable<T>;

  destroyOne: (filter: OneFilter, meta?: Metadata) => Observable<T>;
  destroyById: (filter: UniqueFilter, meta?: Metadata) => Observable<T>;

  updateOne: (body: Update<T, OneFilter>, meta?: Metadata) => Observable<T>;
  updateBulk: (
    body: Update<T, QueryFilter>,
    meta?: Metadata,
  ) => Observable<Total>;
  updateById: (body: Update<T, UniqueFilter>, meta?: Metadata) => Observable<T>;
}

export type GrpcServiceInterface<T> = GrpcService<T>;
