import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Cargo, CargoDto } from '../../common/interfaces';

export class CargosService extends RestfulService<Cargo, CargoDto> {
  constructor(protected axios: AxiosInstance) {
    super('cargoes', axios);
  }
}
