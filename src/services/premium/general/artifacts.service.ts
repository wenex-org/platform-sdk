import { AxiosInstance } from 'axios';

import { RestfulService } from '../../../common/core';
import { Artifact } from '../../../common/interfaces';

export class ArtifactsService extends RestfulService<Artifact> {
  constructor(protected client: AxiosInstance) {
    super('artifacts', client);
  }
}
