export interface AuthenticationResponse {
  token_type?: 'Bearer';

  role?: string;
  scope?: string;
  domain?: string;
  session?: string;
  expires_in?: number;
  access_token?: string;
  refresh_token?: string;

  code?: string;
  state?: string;
}

export type AuthenticationResponseInterface = AuthenticationResponse;
