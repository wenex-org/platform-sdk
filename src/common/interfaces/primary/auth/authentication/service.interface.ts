import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

import { AuthenticationResponse as AuthRes } from './response.interface';
import { AuthenticationRequest as AuthReq } from './request.interface';
import { JwtToken, Result, Token } from './index';

export interface AuthenticationService {
  token: (auth: AuthReq, meta?: Metadata) => Observable<AuthRes>;
  logout: (token: Token, meta?: Metadata) => Observable<Result>;
  decrypt: (token: Token, meta?: Metadata) => Observable<JwtToken>;
}

export type AuthenticationServiceInterface = AuthenticationService;
