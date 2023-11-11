import { Core } from '../../../interfaces';

export interface GrantTime extends Core {
  cron_exp: string;
  duration: number;
}
