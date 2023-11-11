import { JwtTokenType } from '../../../enums';

export interface JwtToken {
  strict: boolean;

  type: JwtTokenType;

  cid: string;
  scope: string;
  domain: string;
  session: string;

  tz: string;
  i18n: string;

  subject: string;
  client_id: string;

  aid?: string;
  uid?: string;

  coworker?: string;
}
