import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { User, UserDto } from '../../common/interfaces/identity';

export class UsersService<Properties extends object = object> extends RestfulService<User<Properties>, UserDto<Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('identity/users', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new UsersService<Properties>(axios);
  }
}
