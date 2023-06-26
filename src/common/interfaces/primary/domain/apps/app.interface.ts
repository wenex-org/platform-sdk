import { AppType, GrantType, Scope, Status } from '../../../../../common/enums';
import { BaseInterface } from '../../../../../common/interfaces';

import { ChangeLogInterface } from './index';

export interface App extends BaseInterface {
  cid: string;
  type: AppType;

  name: string;
  status: Status;

  scopes: Scope[];
  grant_types: GrantType[];

  access_token_ttl: number;
  refresh_token_ttl: number;

  url?: string;
  logo?: string;
  site?: string;
  slogan?: string;
  redirect_uri?: string;
  change_logs?: ChangeLogInterface[];
}

export type AppInterface = App;
