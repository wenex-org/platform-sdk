import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Profile, ProfileDto } from '../../common/interfaces/identity';

export class ProfilesService<Properties extends object = object> extends RestfulService<
  Profile<Properties>,
  ProfileDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('identity/profiles', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new ProfilesService<Properties>(axios, prefix || '/');
  }
}
