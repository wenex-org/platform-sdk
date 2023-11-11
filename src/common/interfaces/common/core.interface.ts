import { Properties } from './generic.interface';

export interface Core {
  id: string;
  ref?: string;
  owner: string;

  shares?: string[];
  groups?: string[];
  clients: string[];

  created_at: Date;
  created_by: string;
  created_in: string;

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
  props?: Properties;
  tags?: string[];

  version: string;

  rand: string;
  timestamp: string;
}
