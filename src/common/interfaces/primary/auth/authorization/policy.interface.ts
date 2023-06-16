import { Action, Resource } from '@app/common/enums';

export interface Policy {
  strict?: boolean;

  action: Action | 'any';
  object: Resource | 'all';

  ip?: string;
  time?: Date;
}

export type PolicyInterface = Policy;
