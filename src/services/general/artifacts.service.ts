import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Artifact, ArtifactDto } from '../../common/interfaces/general';

export class ArtifactsService<Properties extends object = object> extends RestfulService<
  Artifact<Properties>,
  ArtifactDto<Properties>
> {
  constructor(
    protected readonly axios: AxiosInstance,
    protected readonly pathPrefix: string = '/',
  ) {
    super('general/artifacts', axios, pathPrefix);
  }

  static build<Properties extends object = object>(axios: AxiosInstance, prefix: string = '/') {
    return new ArtifactsService<Properties>(axios, prefix || '/');
  }
}
