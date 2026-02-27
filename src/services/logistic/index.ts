import type { AxiosInstance } from 'axios';

import { CargoesService } from './cargoes.service';
import { DriversService } from './drivers.service';
import { TravelsService } from './travels.service';
import { VehiclesService } from './vehicles.service';
import { LocationsService } from './locations.service';

export * from './cargoes.service';
export * from './drivers.service';
export * from './travels.service';
export * from './vehicles.service';
export * from './locations.service';

export class Client<Properties extends object = object> {
  protected _cargoes?: CargoesService<Properties>;
  protected _drivers?: DriversService<Properties>;
  protected _travels?: TravelsService<Properties>;
  protected _vehicles?: VehiclesService<Properties>;
  protected _locations?: LocationsService<Properties>;

  constructor(
    readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {}

  get cargoes() {
    return (this._cargoes = this._cargoes ?? CargoesService.build<Properties>(this.axios, this.pathPrefix));
  }

  get drivers() {
    return (this._drivers = this._drivers ?? DriversService.build<Properties>(this.axios, this.pathPrefix));
  }

  get travels() {
    return (this._travels = this._travels ?? TravelsService.build<Properties>(this.axios, this.pathPrefix));
  }

  get vehicles() {
    return (this._vehicles = this._vehicles ?? VehiclesService.build<Properties>(this.axios, this.pathPrefix));
  }

  get locations() {
    return (this._locations = this._locations ?? LocationsService.build<Properties>(this.axios, this.pathPrefix));
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new Client<Properties>(axios, prefix || '/');
  }
}
