import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

export class RequestService {
  constructor(protected readonly client: AxiosInstance) {}

  get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.get<T>(url, config);
  }

  post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.post<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.delete<T>(url, config);
  }

  put<T, D>(url: string, data?: D, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.put<T>(url, data, config);
  }

  patch<T, D>(url: string, data: D, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.patch<T>(url, data, config);
  }
}
