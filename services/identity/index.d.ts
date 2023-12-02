import { AxiosInstance } from 'axios';
import { ProfilesService } from './profiles.service';
import { SessionsService } from './sessions.service';
import { UsersService } from './users.service';
export * from './users.service';
export * from './profiles.service';
export * from './sessions.service';
export declare class IdentityClient {
    readonly axios: AxiosInstance;
    private $users;
    private $profiles;
    private $sessions;
    constructor(axios: AxiosInstance);
    get users(): UsersService;
    get profiles(): ProfilesService;
    get sessions(): SessionsService;
}
