import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Dto as DtoInterface, Core, Filter, QueryFilter, Serializer } from '../interfaces';
import { RequestService } from '../providers';
export declare class RestfulService<T extends Core, Dto extends DtoInterface<Core>> extends RequestService {
    protected readonly name: string;
    protected readonly client: AxiosInstance;
    protected readonly url: (path: string) => string;
    constructor(name: string, client: AxiosInstance);
    count(filter: QueryFilter<T>, config?: AxiosRequestConfig): Promise<number>;
    create(data: Dto, config?: AxiosRequestConfig): Promise<Serializer<T>>;
    createBulk(data: Dto[], config?: AxiosRequestConfig): Promise<Serializer<T>[]>;
    find(filter: Filter<T>, config?: AxiosRequestConfig): Promise<Serializer<T>[]>;
    findById(id: string, config?: AxiosRequestConfig): Promise<Serializer<T>>;
    deleteById(id: string, config?: AxiosRequestConfig): Promise<Serializer<T>>;
    restoreById(id: string, config?: AxiosRequestConfig): Promise<Serializer<T>>;
    destroyById(id: string, config?: AxiosRequestConfig): Promise<Serializer<T>>;
    updateById(id: string, data: Dto, config?: AxiosRequestConfig): Promise<Serializer<T>>;
    updateBulk(data: Dto, filter: QueryFilter<T>, config?: AxiosRequestConfig): Promise<number>;
}
