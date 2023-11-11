/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

export type GraphqlException = { messages: string; extensions: { code: string } };

export type GraphqlRequest = Partial<{ query: string; mutation: string; variables: any }>;
export type GraphqlResponse<T = any> = { data: T | null; errors?: GraphqlException[] };

export class GraphqlService {
  constructor(protected readonly client: AxiosInstance) {}

  request<T>(
    data: GraphqlRequest,
    config?: AxiosRequestConfig,
  ): AxiosPromise<GraphqlResponse<T>> {
    return this.client.post<GraphqlResponse<T>>('/graphql', data, config);
  }
}
