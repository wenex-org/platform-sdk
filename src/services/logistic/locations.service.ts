import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Location, LocationDto } from '../../common/interfaces';

export class LocationsService extends RestfulService<Location, LocationDto> {
  constructor(protected axios: AxiosInstance) {
    super('locations', axios);
  }
}
