import { Core } from '../core.interface';

export interface Base extends Core {
  owner: string;

  clients: string[];

  created_by: string;
  created_in: string;

  version: string;

  rand: string;
  timestamp: string;
}
export type BaseInterface = Base;
