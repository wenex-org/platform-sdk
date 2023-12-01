import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare class RequestService {
    protected readonly client: AxiosInstance;
    constructor(client: AxiosInstance);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>;
    patch<T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T>;
}
