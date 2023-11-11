import { BaseSub } from '../../common';

export interface GrantTime extends BaseSub {
  cron_exp: string;
  duration: number;
}
export type GrantTimeInterface = GrantTime;
