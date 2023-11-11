import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  AuthenticationRequest,
  AuthenticationResponse,
  JwtToken,
  Result,
  Token,
} from '../../common/interfaces';
import { RequestService } from '../../common/providers';

export class Authentication {
  constructor(protected readonly request: RequestService) {}

  protected readonly url = (path: string) => `/auth/${path}`;

  token(data: AuthenticationRequest, config?: AxiosRequestConfig) {
    return this.request.post<AuthenticationResponse, AuthenticationRequest>(
      this.url('token'),
      data,
      config,
    );
  }

  logout(data: Token, config?: AxiosRequestConfig) {
    return this.request.post<Result, Token>(this.url('logout'), data, config);
  }

  verify(data: Token, config?: AxiosRequestConfig) {
    return this.request.post<JwtToken, Token>(this.url('verify'), data, config);
  }

  static build(client: AxiosInstance) {
    return new Authentication(new RequestService(client));
  }
}
