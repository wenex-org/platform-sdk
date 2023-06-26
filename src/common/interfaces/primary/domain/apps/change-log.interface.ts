import { SubInterface } from '../../../../../common/interfaces';

export interface ChangeLog extends SubInterface {
  code: string;
  changes?: string[];
  deprecated_at?: Date;
}

export type ChangeLogInterface = ChangeLog;
