import type { AxiosInstance } from 'axios';
import { GrantsService } from './grants.service';
import { Authorization } from './authorization.service';
import { Authentication } from './authentication.service';
export * from './grants.service';
export * from './authorization.service';
export * from './authentication.service';
export declare class AuthClient {
    readonly axios: AxiosInstance;
    private $grants;
    private $authorization;
    private $authentication;
    constructor(axios: AxiosInstance);
    get grants(): GrantsService;
    get authorization(): Authorization;
    get authentication(): Authentication;
}
