import type { AxiosInstance } from 'axios';
import { ConfigsService } from './configs.service';
import { SettingsService } from './settings.service';
export * from './configs.service';
export declare class ConfigClient {
    readonly axios: AxiosInstance;
    private $configs;
    private $settings;
    constructor(axios: AxiosInstance);
    get configs(): ConfigsService;
    get settings(): SettingsService;
}
