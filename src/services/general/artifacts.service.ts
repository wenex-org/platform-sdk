import type { AxiosInstance } from 'axios';

import { RestfulService } from '../../common/classes';
import { Artifact, ArtifactDto } from '../../common/interfaces';

export class ArtifactsService extends RestfulService<Artifact, ArtifactDto> {
  constructor(protected axios: AxiosInstance) {
    super('artifacts', axios);
  }
}
