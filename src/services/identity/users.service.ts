import { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { User, UserDto } from '../../common/interfaces';

export class UsersService extends RestfulService<User, UserDto> {
  constructor(protected axios: AxiosInstance) {
    super('users', axios);
  }
}
