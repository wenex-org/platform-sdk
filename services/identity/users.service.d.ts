import { AxiosInstance } from 'axios';
import { RestfulService } from '../../common/classes';
import { User, UserDto } from '../../common/interfaces';
export declare class UsersService extends RestfulService<User, UserDto> {
    protected client: AxiosInstance;
    constructor(client: AxiosInstance);
}
