import { Action, Resource } from '../../../../../common/enums';

export interface PolicyTime {
  cron_exp: string;
  duration: number;
}

export interface Policy {
  subject: string;
  action: Action;
  object: Resource;

  field?: string[];
  filter?: string[];
  location?: string[];

  time?: PolicyTime[];
}

export type PolicyInterface = Policy;
export type PolicyTimeInterface = PolicyTime;
