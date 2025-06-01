import type { AxiosInstance } from 'axios';

import { Data, Items } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { AddressLookup, GeocodeLookup, Location, LocationDto, NominatimPlace } from '../../common/interfaces/logistic';

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

  async addressLookup(data: AddressLookup, config?: RequestConfig<NominatimPlace>): Promise<NominatimPlace> {
    return (await this.post<Data<NominatimPlace>, AddressLookup>(this.url('address-lookup'), data, config)).data;
  }

  async geocodeLookup(data: GeocodeLookup, config?: RequestConfig<NominatimPlace>): Promise<NominatimPlace[]> {
    return (await this.post<Items<NominatimPlace>, GeocodeLookup>(this.url('geocode-lookup'), data, config)).items;
  }
}
