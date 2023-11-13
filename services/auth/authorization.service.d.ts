import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthorizationCanRequest, AuthorizationCanResponse, AuthorizationPolicyRequest, AuthorizationPolicyResponse } from '../../common/interfaces';
import { RequestService } from '../../common/providers';
export declare class Authorization {
    protected readonly request: RequestService;
    constructor(request: RequestService);
    protected readonly url: (path: string) => string;
    can(data: AuthorizationCanRequest, config?: AxiosRequestConfig): import("axios").AxiosPromise<AuthorizationCanResponse>;
    policy(data: AuthorizationPolicyRequest, config?: AxiosRequestConfig): import("axios").AxiosPromise<AuthorizationPolicyResponse>;
    static build(client: AxiosInstance): Authorization;
}
