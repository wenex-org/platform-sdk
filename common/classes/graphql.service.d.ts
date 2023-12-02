import { AxiosInstance, AxiosRequestConfig } from 'axios';
export type GraphqlException = {
    messages: string;
    extensions: {
        code: string;
    };
};
export type GraphqlRequest = Partial<{
    query: string;
    mutation: string;
    variables: any;
}>;
export type GraphqlResponse<T = any> = {
    data: T | null;
    errors?: GraphqlException[];
};
export declare class GraphqlService {
    protected readonly axios: AxiosInstance;
    constructor(axios: AxiosInstance);
    request<T>(data: GraphqlRequest, config?: AxiosRequestConfig): Promise<GraphqlResponse<T>>;
}
