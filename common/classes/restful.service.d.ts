import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { Dto as DtoInterface, Core, Data, Filter, Items, QueryFilter, Serializer, Total } from '../interfaces';
import { RequestService } from '../providers';
export declare class RestfulService<T extends Core, Dto extends DtoInterface<Core>> extends RequestService {
    protected readonly name: string;
    protected readonly client: AxiosInstance;
    protected readonly url: (path: string) => string;
    constructor(name: string, client: AxiosInstance);
    count(filter: QueryFilter<T>, config?: AxiosRequestConfig): AxiosPromise<Total>;
    create(data: Dto, config?: AxiosRequestConfig): AxiosPromise<Serializer<T>>;
    createBulk(data: Dto[], config?: AxiosRequestConfig): AxiosPromise<Items<Serializer<T>>>;
    find(filter: Filter<T>, config?: AxiosRequestConfig): AxiosPromise<Items<Serializer<T>>>;
    findById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<T>>>;
    deleteById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<T>>>;
    restoreById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<T>>>;
    destroyById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<T>>>;
    updateById(id: string, data: Dto, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<T>>>;
    updateBulk(data: Dto, filter: QueryFilter<T>, config?: AxiosRequestConfig): AxiosPromise<Total>;
}
