import { BaseInterface } from '../../../../../common/interfaces';
import { Action, Resource } from '../../../../../common/enums';
import { TimeInterface } from './time.interface';

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
