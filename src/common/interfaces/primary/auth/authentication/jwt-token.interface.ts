import { Scope } from '../../../../../common/enums';

export interface JwtToken {
  cid: string;
  type: 'access' | 'refresh';
  domain: string;
  session: string;
  client_id: string;

  scopes: Scope[];
  roles?: string[];

  aid?: string;
  uid?: string;
}

export type JwtTokenInterface = JwtToken;
