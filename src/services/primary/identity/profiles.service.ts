import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { Profile } from '../../../common/interfaces';

export class ProfilesService extends RestfulService<Profile> {
  constructor(protected client: AxiosInstance) {
    super('profiles', client);
  }
}
