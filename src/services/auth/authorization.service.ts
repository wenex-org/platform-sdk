import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  AuthorizationCanRequest,
  AuthorizationCanResponse,
  AuthorizationPolicyRequest,
  AuthorizationPolicyResponse,
} from '../../common/interfaces';
import { RequestService } from '../../common/providers';

export class Authorization {
  constructor(protected readonly request: RequestService) {}

  protected readonly url = (path: string) => `/auth/${path}`;

  can(data: AuthorizationCanRequest, config?: AxiosRequestConfig) {
    return this.request.post<AuthorizationCanResponse, AuthorizationCanRequest>(
      this.url('can'),
      data,
      config,
    );
  }

  policy(data: AuthorizationPolicyRequest, config?: AxiosRequestConfig) {
    return this.request.post<AuthorizationPolicyResponse, AuthorizationPolicyRequest>(
      this.url('policy'),
      data,
      config,
    );
  }

  static build(client: AxiosInstance) {
    return new Authorization(new RequestService(client));
  }
}
