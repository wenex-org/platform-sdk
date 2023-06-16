import { BaseInterface } from '@app/common/interfaces';
import { Action, Resource } from '@app/common/enums';

import { TimeInterface } from './index';

export interface Grant extends BaseInterface {
  subject: string;
  action: Action;
  object: Resource;

  field?: string[];
  filter?: string[];
  location?: string[];

  time?: TimeInterface[];
}

export type GrantInterface = Grant;
