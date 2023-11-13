import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { Core, Data, Dto, Filter, Items, QueryFilter, Serializer, Total } from '../interfaces';
import { RequestService } from '../providers';
export declare class RestfulService<T extends Core, D extends Dto<Core>, S extends Serializer<Core> = Serializer<T>> extends RequestService {
    protected readonly name: string;
    protected readonly client: AxiosInstance;
    protected readonly url: (path: string) => string;
    constructor(name: string, client: AxiosInstance);
    count(filter: QueryFilter<Dto<D>>, config?: AxiosRequestConfig): AxiosPromise<Total>;
    create(data: Dto<D>, config?: AxiosRequestConfig): AxiosPromise<Serializer<S>>;
    createBulk(data: Dto<D>[], config?: AxiosRequestConfig): AxiosPromise<Items<Serializer<S>>>;
    find(filter: Filter<T>, config?: AxiosRequestConfig): AxiosPromise<Items<Serializer<S>>>;
    findById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>>;
    deleteById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>>;
    restoreById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>>;
    destroyById(id: string, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>>;
    updateById(id: string, data: Dto<D>, config?: AxiosRequestConfig): AxiosPromise<Data<Serializer<S>>>;
    updateBulk(data: Dto<D>, filter: QueryFilter<T>, config?: AxiosRequestConfig): AxiosPromise<Total>;
}
