import type { Document } from 'mongoose';

import { GrantTime } from './time.interface';
import { Action, Resource } from '../../../enums';
import { Core, MakeDto } from '../../../interfaces';

export interface Grant extends Core {
  subject: string;
  action: Action;
  object: Resource;

  field?: string[];
  filter?: string[];
  location?: string[];

  time?: GrantTime[];
}
// ----------------------------------------
// Data Object Model Interface
// ----------------------------------------

export type GrantDto = MakeDto<Grant, 'time'>;
export type GrantSer = SerializerBase<
  Omit<Grant, 'time'> & { time?: SerializerBaseSub<GrantTime>[] }
>;
export type GrantDoc = GrantSer & Document;
