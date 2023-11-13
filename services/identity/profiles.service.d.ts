import type { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { Profile, ProfileDto } from '../../common/interfaces';
export declare class ProfilesService extends RestfulService<Profile, ProfileDto> {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
}
