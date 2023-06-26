import { AxiosInstance } from 'axios';

import { ArtifactsService } from './artifacts.service';

export * from './artifacts.service';

export class GeneralClient {
  private $artifacts!: ArtifactsService;

  constructor(protected client: AxiosInstance) {}

  get artifacts() {
    return (this.$artifacts = this.$artifacts ?? new ArtifactsService(this.client));
  }
}
