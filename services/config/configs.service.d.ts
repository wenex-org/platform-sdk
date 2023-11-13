import type { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { Config, ConfigDto } from '../../common/interfaces';
export declare class ConfigsService extends RestfulService<Config, ConfigDto> {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
}
