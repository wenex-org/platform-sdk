/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type GraphqlException = { messages: string; extensions: { code: string } };

export type GraphqlRequest = Partial<{ query: string; mutation: string; variables: any }>;
export type GraphqlResponse<T = any> = { data: T | null; errors?: GraphqlException[] };

export class GraphqlService {
  constructor(protected readonly client: AxiosInstance) {}

  async request<T>(
    data: GraphqlRequest,
    config?: AxiosRequestConfig,
  ): Promise<GraphqlResponse<T>> {
    const { data: res } = await this.client.post<GraphqlResponse<T>>(
      '/graphql',
      data,
      config,
    );

    if (res?.errors?.length) throw res;
    else return res;
  }
}
