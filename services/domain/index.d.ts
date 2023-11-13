import { AxiosInstance } from 'axios';
import { ClientsService } from './clients.service';
import { AppsService } from './apps.service';
export * from './apps.service';
export * from './clients.service';
export declare class DomainClient {
    protected client: AxiosInstance;
    private $apps;
    private $clients;
    constructor(client: AxiosInstance);
    get apps(): AppsService;
    get clients(): ClientsService;
}
