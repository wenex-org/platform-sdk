import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Dto as DtoInterface, Core, Filter, QueryFilter, Serializer, Pagination, Optional } from '../interfaces';
import { RequestService } from '../providers';
export type RequestConfig<T> = Omit<AxiosRequestConfig, 'params'> & {
    params?: Optional<Filter<T>> & {
        zone?: string;
        skip?: number;
        limit?: number;
        sort?: Pagination<T>['sort'];
    } & {
        [x: string]: any;
    };
};
export declare class RestfulService<T extends Core, Dto extends DtoInterface<Core>> extends RequestService {
    protected readonly name: string;
    protected readonly axios: AxiosInstance;
    protected readonly url: (path: string) => string;
    constructor(name: string, axios: AxiosInstance);
    count(filter: QueryFilter<T>, config?: RequestConfig<T>): Promise<number>;
    create(data: Dto, config?: RequestConfig<T>): Promise<Serializer<T>>;
    createBulk(data: Dto[], config?: RequestConfig<T>): Promise<Serializer<T>[]>;
    find(filter: Filter<T>, config?: RequestConfig<T>): Promise<Serializer<T>[]>;
    findById(id: string, config?: RequestConfig<T>): Promise<Serializer<T>>;
    deleteById(id: string, config?: RequestConfig<T>): Promise<Serializer<T>>;
    restoreById(id: string, config?: RequestConfig<T>): Promise<Serializer<T>>;
    destroyById(id: string, config?: RequestConfig<T>): Promise<Serializer<T>>;
    updateById(id: string, data: Optional<Dto>, config?: RequestConfig<T>): Promise<Serializer<T>>;
    updateBulk(data: Optional<Dto>, filter: QueryFilter<T>, config?: RequestConfig<T>): Promise<number>;
}
