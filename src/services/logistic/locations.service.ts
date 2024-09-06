import type { AxiosInstance } from 'axios';

import {
  BoundaryAdministrative,
  LatLng,
  LatLngDto,
  Location,
  LocationDto,
} from '../../common/interfaces';
import { RequestConfig, RestfulService } from '../../common/classes';

export class LocationsService extends RestfulService<Location, LocationDto> {
  constructor(protected axios: AxiosInstance) {
    super('locations', axios);
  }

  async locationToAddress(
    data: LatLngDto,
    config?: RequestConfig<LatLng>,
  ): Promise<BoundaryAdministrative> {
    return this.post<BoundaryAdministrative, LatLngDto>(
      this.url('location-to-address'),
      data,
      config,
    );
  }
}
