import { Properties } from './generic.interface';

export interface Core {
  id: string;
  ref?: string;

  shares?: string[];
  groups?: string[];

  created_at: Date;

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
}
export type CoreInterface = Core;
