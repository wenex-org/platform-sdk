import { BaseInterface } from '@app/common/interfaces/base';

export interface Session extends BaseInterface {
  agent: string;
}

export type SessionInterface = Session;
