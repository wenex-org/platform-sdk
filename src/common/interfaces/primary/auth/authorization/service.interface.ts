import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

import { AuthorizationResponse as AuthRes } from './response.interface';
import { AuthorizationRequest as AuthReq } from './request.interface';

export interface AuthorizationService {
  can: (auth: AuthReq, meta?: Metadata) => Observable<AuthRes>;
}

export type AuthorizationServiceInterface = AuthorizationService;
