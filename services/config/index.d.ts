import type { AxiosInstance } from 'axios';
import { ConfigsService } from './configs.service';
export * from './configs.service';
export declare class ConfigClient {
    protected client: AxiosInstance;
    private $configs;
    constructor(client: AxiosInstance);
    get configs(): ConfigsService;
}
