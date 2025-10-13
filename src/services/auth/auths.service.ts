import type { AxiosInstance } from 'axios';

import {
  AuthCheck,
  AuthenticationRequest,
  AuthenticationResponse,
  AuthorizationRequest,
  AuthorizationResponse,
} from '../../common/interfaces/auth';
import { Result } from '../../common/core/interfaces';
import { RequestConfig } from '../../common/core/types';
import { JwtToken } from '../../common/core/interfaces/auth';
import { RequestService } from '../../common/core/providers';

export class AuthsService extends RequestService {
  protected readonly url = (path: string) => `/auth/${path}`;

  constructor(protected readonly axios: AxiosInstance) {
    super(axios);
  }

  check(data: AuthCheck, config?: RequestConfig) {
    return this.post<Result, AuthCheck>(this.url('check'), data, config);
  }

  token(data: AuthenticationRequest, config?: RequestConfig) {
    return this.post<AuthenticationResponse, AuthenticationRequest>(this.url('token'), data, config);
  }

  verify(config?: RequestConfig) {
    return this.get<JwtToken>(this.url('verify'), config);
  }

  logout(config?: RequestConfig) {
    return this.get<Result>(this.url('logout'), config);
  }

  can(data: AuthorizationRequest, config?: RequestConfig) {
    return this.post<AuthorizationResponse, AuthorizationRequest>(this.url('can'), data, config);
  }

  static build(axios: AxiosInstance) {
    return new AuthsService(axios);
  }
}
