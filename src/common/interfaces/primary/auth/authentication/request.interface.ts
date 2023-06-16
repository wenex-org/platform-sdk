import { GrantType, ResponseType, Scope } from '@app/common/enums';

export interface AuthenticationRequest {
  client_id: string;
  grant_type: GrantType;

  roles?: string[];
  scopes?: Scope[];
  domain?: string;

  email?: string;
  username?: string;
  password?: string;
  phone?: string;

  code?: string;
  state?: string;
  app_id?: string;
  client_secret?: string;
  response_type?: ResponseType;

  redirect_uri?: string;
  refresh_token?: string;
  confirmation_code?: string;
}

export type AuthenticationRequestInterface = AuthenticationRequest;
