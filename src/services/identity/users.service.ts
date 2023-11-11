import { AxiosInstance } from 'axios';

import { User } from '../../common/interfaces';
import { RestfulService } from '../../common/core';

export class UsersService extends RestfulService<User> {
  constructor(protected client: AxiosInstance) {
    super('users', client);
  }
}
