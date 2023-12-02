import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Profile, ProfileDto } from '../../common/interfaces';

export class ProfilesService extends RestfulService<Profile, ProfileDto> {
  constructor(protected axios: AxiosInstance) {
    super('profiles', axios);
  }
}
