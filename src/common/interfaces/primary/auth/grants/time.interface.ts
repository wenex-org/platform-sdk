import { SubInterface } from '../../../../../common/interfaces';

export interface Time extends SubInterface {
  cron_exp: string;
  duration: number;
}

export type TimeInterface = Time;
