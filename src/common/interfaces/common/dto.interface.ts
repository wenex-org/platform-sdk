import { MakeOptional } from './generic.interface';

type Base = {
  id?: string;

  owner?: string;
  clients?: string[];

  created_at?: Date;
  created_by?: string;
  created_in?: string;

  version?: string;

  rand?: string;
  timestamp?: string;
};

export type Dto<T extends Base> = MakeOptional<
  T,
  | 'id'
  | 'owner'
  | 'clients'
  | 'created_at'
  | 'created_by'
  | 'created_in'
  | 'version'
  | 'rand'
  | 'timestamp'
>;

export type MakeDto<
  T extends Base & { [X: string]: [Base] },
  K extends keyof T,
> = Dto<T> & { [P in K]?: Dto<T[P][0]> };
