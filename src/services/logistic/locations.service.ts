import type { AxiosInstance } from 'axios';

import { Data, Items } from '../../common/core/interfaces';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { AddressLookupDto, GeocodeLookupDto, Location, LocationDto, NominatimPlace } from '../../common/interfaces/logistic';

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

  async addressLookup(data: AddressLookupDto, config?: RequestConfig<NominatimPlace>): Promise<NominatimPlace> {
    return (await this.post<Data<NominatimPlace>, AddressLookupDto>(this.url('address-lookup'), data, config)).data;
  }

  async geocodeLookup(data: GeocodeLookupDto, config?: RequestConfig<NominatimPlace>): Promise<NominatimPlace[]> {
    return (await this.post<Items<NominatimPlace>, GeocodeLookupDto>(this.url('geocode-lookup'), data, config)).items;
  }
}
