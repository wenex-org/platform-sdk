import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { User, UserDto } from '../../common/interfaces/identity';

export class UsersService<Properties extends object = object> extends RestfulService<User<Properties>, UserDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('identity/users', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new UsersService<Properties>(axios, prefix || '/');
  }
}
