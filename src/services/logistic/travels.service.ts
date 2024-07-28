import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Travel, TravelDto } from '../../common/interfaces';

export class TravelsService extends RestfulService<Travel, TravelDto> {
  constructor(protected axios: AxiosInstance) {
    super('travels', axios);
  }
}
