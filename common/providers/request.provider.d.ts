import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
export declare class RequestService {
    protected readonly client: AxiosInstance;
    constructor(client: AxiosInstance);
    get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): AxiosPromise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): AxiosPromise<T>;
    patch<T, D>(url: string, data: D, config?: AxiosRequestConfig): AxiosPromise<T>;
}
