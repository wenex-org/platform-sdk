import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Profile, ProfileDto } from '../../common/interfaces/identity';

export class ProfilesService<Properties extends object = object> extends RestfulService<
  Profile<Properties>,
  ProfileDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('profiles', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ProfilesService<Properties>(axios);
  }
}
