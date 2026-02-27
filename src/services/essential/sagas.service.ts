import type { AxiosInstance } from 'axios';

import { Data } from '../../common/core/interfaces';
import { RequestConfig } from '../../common/core/types';
import { SagaStagesService } from './saga-stages.service';
import { RestfulService } from '../../common/core/classes';
import { Saga, SagaDto, SagaStage, SagaStageAddDto, SagaStartDto } from '../../common/interfaces/essential';

export class SagasService<Properties extends object = object> extends RestfulService<Saga<Properties>, SagaDto<Properties>> {
  protected _stages?: SagaStagesService;

  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('essential/sagas', axios, pathPrefix);
  }

  async start(data: SagaStartDto<Properties>, config?: RequestConfig<Saga<Properties>>) {
    return (await this.post<Data<Saga<Properties>>, SagaStartDto<Properties>>(this.url('start'), data, config)).data;
  }

  async add(data: SagaStageAddDto, config?: RequestConfig<Saga<Properties>>) {
    return (await this.post<Data<SagaStage>, SagaStageAddDto>(this.url('add'), data, config)).data;
  }

  async abort(id: string, config?: RequestConfig<Saga<Properties>>) {
    return (await this.get<Data<Saga<Properties>>>(this.url(`${id}/abort`), config)).data;
  }

  async commit(id: string, config?: RequestConfig<Saga<Properties>>) {
    return (await this.get<Data<Saga<Properties>>>(this.url(`${id}/commit`), config)).data;
  }

  get stages() {
    return (this._stages = this._stages ?? SagaStagesService.build(this.axios));
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new SagasService<Properties>(axios);
  }
}
