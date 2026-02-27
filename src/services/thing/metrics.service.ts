import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Metric, MetricDto } from '../../common/interfaces/thing';

export class MetricsService<Properties extends object = object> extends RestfulService<Metric<Properties>, MetricDto<Properties>> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('thing/metrics', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new MetricsService<Properties>(axios);
  }
}
