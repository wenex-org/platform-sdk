import { Action, Resource } from '@app/common/enums';

export interface AuthorizationRequest {
  token: string;
  strict?: boolean;

  action: Action | 'any';
  object: Resource | 'all';

  ip?: string;
  time?: Date;
}

export type AuthorizationRequestInterface = AuthorizationRequest;
