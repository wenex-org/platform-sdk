import type { AxiosInstance } from 'axios';

import { Data } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { BoundaryAdministrative, LatLngDto, Location, LocationDto } from '../../common/interfaces/logistic';

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

  async addressLookup(data: LatLngDto, config?: RequestConfig<BoundaryAdministrative>): Promise<BoundaryAdministrative> {
    return (await this.post<Data<BoundaryAdministrative>, LatLngDto>(this.url('address-lookup'), data, config)).data;
  }
}
