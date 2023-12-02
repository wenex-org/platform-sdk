import type { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { Setting, SettingDto } from '../../common/interfaces';
export declare class SettingsService extends RestfulService<Setting, SettingDto> {
    protected axios: AxiosInstance;
    constructor(axios: AxiosInstance);
}
