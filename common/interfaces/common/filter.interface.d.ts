/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import type { FilterQuery, PopulateOptions, ProjectionType, SortOrder } from 'mongoose';
import { Core } from './core.interface';
export type QueryID = {
    id: string;
    ref?: string;
};
export type Query<T = Core> = FilterQuery<T>;
export type Populate = PopulateOptions[];
export type Projection<T = Core> = ProjectionType<T>;
export type Pagination<T = Core> = {
    limit?: number;
    skip?: number;
    sort?: {
        [key in keyof T]: SortOrder | {
            $meta: 'textScore';
        };
    };
};
export type QueryFilter<T = Core> = {
    query: Query<T>;
};
export type Filter<T = Core> = {
    populate?: Populate;
    projection?: Projection<T>;
    pagination?: Pagination<T>;
} & QueryFilter<T>;
export type FilterID<T = Core> = {
    query: QueryID;
    populate?: Populate;
    projection?: Projection<T>;
};
export type FilterOne<T = Core> = Omit<Filter<T>, 'pagination'>;
