import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/core/classes';
import { Artifact, ArtifactDto } from '../../common/interfaces/general';

export class ArtifactsService<Properties extends object = object> extends RestfulService<
  Artifact<Properties>,
  ArtifactDto<Properties>
> {
  constructor(protected axios: AxiosInstance) {
    super('artifacts', axios);
  }

  static build<Properties extends object = object>(axios: AxiosInstance) {
    return new ArtifactsService<Properties>(axios);
  }
}
