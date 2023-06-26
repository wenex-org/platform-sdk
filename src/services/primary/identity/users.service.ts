import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { User } from '../../../common/interfaces';

export class UsersService extends RestfulService<User> {
  constructor(protected client: AxiosInstance) {
    super('users', client);
  }
}
