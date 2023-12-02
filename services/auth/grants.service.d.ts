import type { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { Grant, GrantDto } from '../../common/interfaces';
export declare class GrantsService extends RestfulService<Grant, GrantDto> {
    protected axios: AxiosInstance;
    constructor(axios: AxiosInstance);
}
