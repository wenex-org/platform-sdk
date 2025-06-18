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

  constructor(readonly axios: AxiosInstance) {}

  get cargoes() {
    return (this._cargoes = this._cargoes ?? CargoesService.build<Properties>(this.axios));
  }

  get drivers() {
    return (this._drivers = this._drivers ?? DriversService.build<Properties>(this.axios));
  }

  get travels() {
    return (this._travels = this._travels ?? TravelsService.build<Properties>(this.axios));
  }

  get vehicles() {
    return (this._vehicles = this._vehicles ?? VehiclesService.build<Properties>(this.axios));
  }

  get locations() {
    return (this._locations = this._locations ?? LocationsService.build<Properties>(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new Client<Properties>(axios);
  }
}
