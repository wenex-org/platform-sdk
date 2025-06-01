import type { AxiosInstance } from 'axios';

import { Core, Dto } from '../../common/core/interfaces';
import { RestfulService } from '../../common/core/classes';
import { SagaStage, SagaStageDto } from '../../common/interfaces/essential';

export class SagaStagesService<
  T extends Core = Core,
  D extends Dto<Core> = Dto<Core>,
  Properties extends object = object,
> extends RestfulService<SagaStage<T, D, Properties>, SagaStageDto<T, D, Properties>> {
  constructor(protected axios: AxiosInstance) {
    super('essential/saga-stages', axios);
  }

  static build<T extends Core = Core, D extends Dto<Core> = Dto<Core>, Properties extends object = object>(axios: AxiosInstance) {
    return new SagaStagesService<T, D, Properties>(axios);
  }
}
