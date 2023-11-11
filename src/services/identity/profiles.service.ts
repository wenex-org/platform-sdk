import { AxiosInstance } from 'axios';

import { Profile } from '../../common/interfaces';
import { RestfulService } from '../../common/core';

export class ProfilesService extends RestfulService<Profile> {
  constructor(protected client: AxiosInstance) {
    super('profiles', client);
  }
}
