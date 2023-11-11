import { Core } from '../../common';

export interface AppChangeLog extends Core {
  code?: string;
  changes: string[];
  deprecation_date?: Date;
}
