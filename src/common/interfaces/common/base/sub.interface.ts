import { Core } from '../core.interface';

export interface BaseSub extends Core {
  owner?: string;

  clients?: string[];

  created_by?: string;
  created_in?: string;

  version?: string;

  rand?: string;
  timestamp?: string;
}
export type BaseSubInterface = BaseSub;
