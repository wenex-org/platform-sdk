import type { AxiosInstance } from 'axios';

import {
  Data,
  Saga,
  SagaDto,
  SagaHistory,
  SagaHistoryAppendDto,
  SagaStartDto,
  Serializer,
} from '../../../common/interfaces';
import { SagaHistoriesService } from './history.service';
import { RequestConfig, RestfulService } from '../../../common/classes';

export class SagasService extends RestfulService<Saga, SagaDto> {
  protected $histories?: SagaHistoriesService;

  constructor(protected axios: AxiosInstance) {
    super('sagas', axios);
  }

  get histories() {
    return (this.$histories = this.$histories ?? new SagaHistoriesService(this.axios));
  }

  async start(
    data: SagaStartDto,
    config?: RequestConfig<Saga>,
  ): Promise<Serializer<Saga>> {
    return (
      await this.post<Data<Serializer<Saga>>, SagaStartDto>(
        this.url('start'),
        data,
        config,
      )
    ).data;
  }

  async append(
    data: SagaHistoryAppendDto,
    config?: RequestConfig<SagaHistory>,
  ): Promise<Serializer<SagaHistory>> {
    return (
      await this.post<Data<Serializer<SagaHistory>>, SagaHistoryAppendDto>(
        this.url('append'),
        data,
        config,
      )
    ).data;
  }

  async commit(id: string, config?: RequestConfig<Saga>): Promise<Serializer<Saga>> {
    return (
      await this.patch<Data<Serializer<Saga>>, undefined>(
        this.url(`${id}/commit`),
        undefined,
        config,
      )
    ).data;
  }

  async abort(id: string, config?: RequestConfig<Saga>): Promise<Serializer<Saga>> {
    return (
      await this.patch<Data<Serializer<Saga>>, undefined>(
        this.url(`${id}/abort`),
        undefined,
        config,
      )
    ).data;
  }
}
