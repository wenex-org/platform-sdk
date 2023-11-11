import { MakeOptional } from './generic.interface';

export type Dto<
  T extends {
    id?: string;

    owner?: string;
    clients?: string[];

    created_at?: Date;
    created_by?: string;
    created_in?: string;

    version?: string;

    rand?: string;
    timestamp?: string;
  },
> = MakeOptional<
  T,
  | 'id'
  | 'owner'
  | 'clients'
  | 'created_at'
  | 'created_by'
  | 'created_in'
  | 'rand'
  | 'version'
  | 'timestamp'
>;
