import type { AxiosInstance } from 'axios';
import { GraphqlService } from './common/classes';
import { AuthClient, ConfigClient, DomainClient, IdentityClient } from './services';
export * from './services';
export declare class PlatformClient {
    protected client: AxiosInstance;
    private $graphql;
    private $auth;
    private $config;
    private $domain;
    private $identity;
    constructor(client: AxiosInstance);
    get graphql(): GraphqlService;
    get auth(): AuthClient;
    get domain(): DomainClient;
    get config(): ConfigClient;
    get identity(): IdentityClient;
}
