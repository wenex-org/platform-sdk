import { Action, Resource } from '../../../../../common/enums';

export interface AuthorizationRequest {
  token: string;
  strict?: boolean;

  action: Action;
  object: Resource;

  ip?: string;
  time?: Date;
}

export type AuthorizationRequestInterface = AuthorizationRequest;
