import { Properties } from './props.interface';

export interface Base {
  owner: string;

  id?: string;
  ref?: string;

  shares?: string[];
  groups?: string[];
  clients: string[];

  created_at?: Date;
  created_by?: string;
  created_in?: string;

  updated_at?: Date;
  updated_by?: string;
  updated_in?: string;
  deleted_at?: Date;
  deleted_by?: string;
  deleted_in?: string;
  restored_at?: Date;
  restored_by?: string;
  restored_in?: string;

  description?: string;
  version?: string;
  props?: Properties;
  tags?: string[];
}

export type BaseInterface = Base;
