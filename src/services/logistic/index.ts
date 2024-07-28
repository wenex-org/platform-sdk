import { AxiosInstance } from 'axios';

import { CargosService } from './cargoes.service';
import { DriversService } from './drivers.service';
import { TravelsService } from './travels.service';
import { VehiclesService } from './vehicles.service';
import { LocationsService } from './locations.service';

export * from './cargoes.service';
export * from './drivers.service';
export * from './travels.service';
export * from './vehicles.service';
export * from './locations.service';

export class LogisticClient {
  private $cargos!: CargosService;
  private $drivers!: DriversService;
  private $travels!: TravelsService;
  private $vehicles!: VehiclesService;
  private $locations!: LocationsService;

  constructor(readonly axios: AxiosInstance) {}

  get cargos() {
    return (this.$cargos = this.$cargos ?? new CargosService(this.axios));
  }

  get drivers() {
    return (this.$drivers = this.$drivers ?? new DriversService(this.axios));
  }

  get travels() {
    return (this.$travels = this.$travels ?? new TravelsService(this.axios));
  }

  get vehicles() {
    return (this.$vehicles = this.$vehicles ?? new VehiclesService(this.axios));
  }

  get locations() {
    return (this.$locations = this.$locations ?? new LocationsService(this.axios));
  }
}
