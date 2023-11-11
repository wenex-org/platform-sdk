import { AxiosInstance, AxiosRequestConfig } from 'axios';

import { RequestService } from '../../common/core';
import { AuthorizationRequest, AuthorizationResponse } from '../../common/interfaces';

export class Authorization {
  constructor(protected readonly request: RequestService) {}

  protected readonly url = (path: string) => `/auth/${path}`;

  can(data: AuthorizationRequest, config?: AxiosRequestConfig) {
    return this.request.post<AuthorizationResponse>(this.url('can'), data, config);
  }

  grant(data: AuthorizationRequest, config?: AxiosRequestConfig) {
    return this.request.post<AuthorizationResponse>(this.url('grant'), data, config);
  }

  static build(client: AxiosInstance) {
    return new Authorization(new RequestService(client));
  }
}
