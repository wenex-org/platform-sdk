import type { FilterQuery, PopulateOptions, ProjectionFields, SortOrder } from 'mongoose';
export type QueryID = {
    id: string;
    ref?: string;
};
export type Query<T = any> = FilterQuery<T>;
export type Populate = PopulateOptions[];
export type Projection<T = any> = ProjectionFields<T>;
export type Pagination<T = any> = {
    limit?: number;
    skip?: number;
    sort?: {
        [key in keyof T]: SortOrder | {
            $meta: 'textScore';
        };
    };
};
export type QueryFilter<T = any> = {
    query: Query<T>;
};
export type Filter<T = any> = {
    populate?: Populate;
    projection?: Projection<T>;
    pagination?: Pagination<T>;
} & QueryFilter<T>;
export type FilterID<T = any> = {
    query: QueryID;
    populate?: Populate;
    projection?: Projection<T>;
};
export type FilterOne<T = any> = Omit<Filter<T>, 'pagination'>;
