import type { Document } from 'mongoose';

import { ClientDomain } from './domain.interface';
import { Core, Dto, MakeOptional } from '../../common';
import { ClientOtpService } from './otp-service.interface';
import { ClientPlan, GrantType, Scope, State, Status } from '../../../enums';

export type ApiToken = {
  cid: string;
  client_id: string;
  whitelist?: string[];
  expiration_date: Date;
};

export interface Client extends Core {
  name: string;
  plan: ClientPlan;

  url?: string;
  logo?: string;
  site?: string;
  slogan?: string;

  state: State;
  status: Status;

  client_id: string;
  client_secret: string;
  expiration_date: Date;

  access_token_ttl: number;
  refresh_token_ttl: number;

  scopes: Scope[];
  grant_types: GrantType[];

  api_key: string | ApiToken;

  whitelist?: string[];
  coworkers?: string[];
  redirect_uris?: string[];

  domains: ClientDomain[];
  otp_services: ClientOtpService[];
}

// ----------------------------------------
// Data Object Model Interface
// ----------------------------------------

export type ClientDto = MakeOptional<
  Dto<Omit<Client, 'domains' | 'otp_services'>>,
  'state' | 'client_id' | 'access_token_ttl' | 'refresh_token_ttl'
> & {
  domains: Dto<MakeOptional<ClientDomain, 'status'>>[];
  otp_services?: Dto<MakeOptional<ClientOtpService, 'provider'>>[];
};
export type ClientDoc = Client & Document;
