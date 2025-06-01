import type { AxiosInstance } from 'axios';

import { SagaStagesService } from './saga-stages.service';
import { RequestConfig, RestfulService } from '../../common/core/classes';
import { Saga, SagaDto, SagaStage, SagaStageAddDto, SagaStartDto } from '../../common/interfaces/essential';

export class SagasService<Properties extends object = object> extends RestfulService<Saga<Properties>, SagaDto<Properties>> {
  protected _stages?: SagaStagesService;

  constructor(protected axios: AxiosInstance) {
    super('essential/sagas', axios);
  }

  start(data: SagaStartDto<Properties>, config?: RequestConfig<Saga<Properties>>) {
    return this.post<Saga<Properties>, SagaStartDto<Properties>>(this.url('start'), data, config);
  }

  add(data: SagaStageAddDto, config?: RequestConfig<Saga<Properties>>) {
    return this.post<SagaStage, SagaStageAddDto>(this.url('add'), data, config);
  }

  abort(id: string, config?: RequestConfig<Saga<Properties>>) {
    return this.get<Saga<Properties>>(this.url(`${id}/abort`), config);
  }

  commit(id: string, config?: RequestConfig<Saga<Properties>>) {
    return this.get<Saga<Properties>>(this.url(`${id}/commit`), config);
  }

  get stages() {
    return (this._stages = this._stages ?? SagaStagesService.build(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new SagasService<Properties>(axios);
  }
}
