import type { AxiosInstance } from 'axios';

import { RequestConfig } from '../../common/core/types';
import { Data, Items } from '../../common/core/interfaces';
import { RestfulService } from '../../common/core/classes';
import { AddressLookup, GeocodeLookup, Location, LocationDto, NominatimPlace } from '../../common/interfaces/logistic';

export class LocationsService<Properties extends object = object> extends RestfulService<
  Location<Properties>,
  LocationDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('logistic/locations', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new LocationsService<Properties>(axios, prefix || '/');
  }

  async addressLookup(data: AddressLookup, config?: RequestConfig<NominatimPlace>): Promise<NominatimPlace> {
    return (await this.post<Data<NominatimPlace>, AddressLookup>(this.url('address-lookup'), data, config)).data;
  }

  async geocodeLookup(data: GeocodeLookup, config?: RequestConfig<NominatimPlace>): Promise<NominatimPlace[]> {
    return (await this.post<Items<NominatimPlace>, GeocodeLookup>(this.url('geocode-lookup'), data, config)).items;
  }
}
