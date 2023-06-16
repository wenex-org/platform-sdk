import type { Cursor, Document, Model } from 'mongoose';
import { CreateDto, UpdateDto } from '@app/common/dto';

import { QueryFilter, Filter, OneFilter, UniqueFilter } from '../filters';

export interface RepositoryOptions {
  at?: Date;
  by: string;
  in: string;
}

export interface Repository<T> {
  readonly model: Model<Document & T>;

  count(filter: QueryFilter<Document & T>): Promise<number>;

  create(
    data: CreateDto<T>,
    options?: RepositoryOptions,
  ): Promise<Document & T>;

  find(filter: Filter<T>): Promise<(Document & T)[]>;
  cursor(filter: Filter<T>): Cursor<Document & T, any>;

  findOne(filter: OneFilter<T>): Promise<Document & T>;
  findById(filter: UniqueFilter<T>): Promise<Document & T>;

  deleteOne(
    filter: OneFilter<T>,
    options: RepositoryOptions,
  ): Promise<Document & T>;
  deleteById(
    filter: UniqueFilter<T>,
    options: RepositoryOptions,
  ): Promise<Document & T>;

  restoreOne(
    filter: OneFilter<T>,
    options: RepositoryOptions,
  ): Promise<Document & T>;
  restoreById(
    filter: UniqueFilter<T>,
    options: RepositoryOptions,
  ): Promise<Document & T>;

  destroyOne(filter: OneFilter<T>): Promise<Document & T>;
  destroyById(filter: UniqueFilter<T>): Promise<Document & T>;

  updateOne(
    data: UpdateDto<T>,
    filter: OneFilter<T>,
    options?: RepositoryOptions,
  ): Promise<Document & T>;
  updateBulk(
    data: UpdateDto<T>,
    filter: QueryFilter<Document & T>,
    options?: RepositoryOptions,
  ): Promise<number>;
  updateById(
    data: UpdateDto<T>,
    filter: UniqueFilter<T>,
    options?: RepositoryOptions,
  ): Promise<Document & T>;
}

export type RepositoryInterface<T> = Repository<T>;
