/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result as ResultEnum } from '../../enums';
import { MakeRequired } from './generic.interface';

export type Total = { total: number };
export type Result = { result: ResultEnum };

// ----------------------------------------
// Wrapper Interfaces
// ----------------------------------------

export type Data<T = any> = { data: T };
export type Items<T = any> = { items: T[] };

// ----------------------------------------
// Serializer Interface
// ----------------------------------------

export type Serializer<
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
> = MakeRequired<
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
