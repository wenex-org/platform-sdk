import { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { Session, SessionDto } from '../../common/interfaces';
export declare class SessionsService extends RestfulService<Session, SessionDto> {
    protected axios: AxiosInstance;
    constructor(axios: AxiosInstance);
}
