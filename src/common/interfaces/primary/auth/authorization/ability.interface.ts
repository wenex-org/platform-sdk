import { Action, Resource } from '@app/common/enums';

export interface AbilityTime {
  cron_exp: string;
  duration: number;
}

export interface Ability {
  subject: string;
  action: Action | 'any';
  object: Resource | 'all';

  field?: string[];
  filter?: string[];
  location?: string[];

  time?: AbilityTime[];
}

export type AbilityInterface = Ability;
export type AbilityTimeInterface = AbilityTime;
