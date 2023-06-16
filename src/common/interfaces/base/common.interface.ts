import { QueryFilter, OneFilter, UniqueFilter } from './filters';
import { UpdateDto } from '@app/common/dto';

/**
 * In most cases should have token
 */
export type Metadata = Record<string, any>;

export interface Update<T, Filter> {
  data: UpdateDto<T>;
  filter: Filter;
}
export type UpdateInterface<T, Filter> = Update<T, Filter>;

export type UpdateOne<T> = Update<T, OneFilter<T>>;
export type UpdateOneInterface<T> = UpdateOne<T>;

export type UpdateBulk<T> = Update<T, QueryFilter<T>>;
export type UpdateBulkInterface<T> = UpdateBulk<T>;

export type UpdateUnique<T> = Update<T, UniqueFilter<T>>;
export type UpdateUniqueInterface<T> = UpdateUnique<T>;

export interface KafkaObject<T = any> {
  value?: T;
  key?: string;
  headers?: Record<string, any>;
}
export type KafkaObjectInterface<T = any> = KafkaObject<T>;
