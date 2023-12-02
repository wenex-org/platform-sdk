import type { AxiosInstance } from 'axios';
import { App, AppDto } from '../../common/interfaces';
import { RestfulService } from '../../common/classes';
export declare class AppsService extends RestfulService<App, AppDto> {
    protected axios: AxiosInstance;
    constructor(axios: AxiosInstance);
}
