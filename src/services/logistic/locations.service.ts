import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Location, LocationDto } from '../../common/interfaces/logistic';

export class LocationsService<Properties extends object = object> extends RestfulService<
  Location<Properties>,
  LocationDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('locations', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new LocationsService<Properties>(axios);
  }
}
