import { CreateDto, UpdateDto } from '@app/common/dto';
import { Cursor, Document } from 'mongoose';
import { Observable } from 'rxjs';

import { QueryFilter, Filter, OneFilter, UniqueFilter } from '../filters';
import { Repository } from './index';
import { Metadata } from '../index';

export interface ServiceOptions {
  meta?: Metadata;
}

export interface Service<T> {
  readonly repository: Repository<T>;

  count(filter: QueryFilter<Document & T>): Observable<number>;

  create(data: CreateDto<T>, options?: ServiceOptions): Observable<Document & T>;

  find(filter: Filter<T>): Observable<(Document & T)[]>;
  cursor(filter: Filter<T>): Cursor<Document & T, any>;

  findOne(filter: OneFilter<T>): Observable<Document & T>;
  findById(filter: UniqueFilter<T>): Observable<Document & T>;

  deleteOne(filter: OneFilter<T>, options: ServiceOptions): Observable<Document & T>;
  deleteById(filter: UniqueFilter<T>, options: ServiceOptions): Observable<Document & T>;

  restoreOne(filter: OneFilter<T>, options: ServiceOptions): Observable<Document & T>;
  restoreById(filter: UniqueFilter<T>, options: ServiceOptions): Observable<Document & T>;

  destroyOne(filter: OneFilter<T>): Observable<Document & T>;
  destroyById(filter: UniqueFilter<T>): Observable<Document & T>;

  updateOne(data: UpdateDto<T>, filter: OneFilter<T>, options?: ServiceOptions): Observable<Document & T>;
  updateBulk(
    data: UpdateDto<T>,
    filter: QueryFilter<Document & T>,
    options?: ServiceOptions,
  ): Observable<number>;
  updateById(data: UpdateDto<T>, filter: UniqueFilter<T>, options?: ServiceOptions): Observable<Document & T>;
}

export type ServiceInterface<T> = Service<T>;
