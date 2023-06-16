/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FilterQuery, ProjectionFields, SortOrder } from 'mongoose';

export type UniqueQuery = { id: string };

export type Query<T = any> = FilterQuery<T>;
export type Projection<T = any> = ProjectionFields<T>;
export interface Pagination<T = any> {
  limit: number;
  skip?: number;
  sort?: { [key in keyof T]: SortOrder | { $meta: 'textScore' } };
}

export interface Filter<T = any> {
  query: Query<T>;
  projection?: Projection<T>;
  pagination?: Pagination<T>;
}
export type OneFilter<T = any> = Omit<Filter<T>, 'pagination'>;
export type QueryFilter<T = any> = Pick<Filter<T>, 'query'>;
export type UniqueFilter<T = any> = {
  query: UniqueQuery;
  projection?: Projection<T>;
};

export type FilterInterface<T = any> = Filter<T>;
export type OneFilterInterface<T = any> = OneFilter<T>;
export type QueryFilterInterface<T = any> = QueryFilter<T>;
export type UniqueFilterInterface<T = any> = UniqueFilter<T>;
