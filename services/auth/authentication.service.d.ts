import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthenticationRequest, AuthenticationResponse, JwtToken, Result, Token } from '../../common/interfaces';
import { RequestService } from '../../common/providers';
export declare class Authentication {
    protected readonly request: RequestService;
    constructor(request: RequestService);
    protected readonly url: (path: string) => string;
    token(data: AuthenticationRequest, config?: AxiosRequestConfig): Promise<AuthenticationResponse>;
    logout(data: Token, config?: AxiosRequestConfig): Promise<Result>;
    verify(data: Token, config?: AxiosRequestConfig): Promise<JwtToken>;
    static build(client: AxiosInstance): Authentication;
}
