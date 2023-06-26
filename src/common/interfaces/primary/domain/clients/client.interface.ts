import { GrantType, Plan, Scope, State, Status } from '../../../../../common/enums';
import { BaseInterface } from '../../../../../common/interfaces';

import { DomainInterface, OtpServiceInterface } from './index';

export interface Client extends BaseInterface {
  name: string;
  plan: Plan;

  url?: string;
  logo?: string;
  site?: string;
  slogan?: string;

  state: State;
  status: Status;

  api_key: string;
  client_id: string;
  client_secret: string;

  access_token_ttl: number;
  refresh_token_ttl: number;

  expiration_date: Date;
  scopes: Scope[];
  domains: DomainInterface[];

  grant_types: GrantType[];
  redirect_uri?: string;
  otp_services: OtpServiceInterface[];
}

export type ClientInterface = Client;
