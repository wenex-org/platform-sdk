export interface AuthenticationResponse {
  token_type?: 'Bearer';

  expires_in?: number;

  scope?: string;
  domain?: string;
  subject?: string;

  tz?: string;
  i18n?: string;
  session?: string;
  access_token?: string;
  refresh_token?: string;

  code?: string;
  state?: string;

  coworker?: string;
  redirect_uri?: string;
}
