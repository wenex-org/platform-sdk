import { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  AuthenticationRequest,
  AuthenticationResponse,
  JwtToken,
  Result,
  Token,
} from '../../../common/interfaces/primary';
import { RequestService } from '../../../common/core';

export class Authentication {
  constructor(protected readonly request: RequestService) {}

  protected readonly url = (path: string) => `/auth/${path}`;

  token(data: AuthenticationRequest, config?: AxiosRequestConfig) {
    return this.request.post<AuthenticationResponse>(this.url('token'), data, config);
  }

  decrypt(data: Token, config?: AxiosRequestConfig) {
    return this.request.post<JwtToken>(this.url('decrypt'), data, config);
  }

  logout(data: Token, config?: AxiosRequestConfig) {
    return this.request.post<Result>(this.url('logout'), data, config);
  }

  static build(client: AxiosInstance) {
    return new Authentication(new RequestService(client));
  }
}
