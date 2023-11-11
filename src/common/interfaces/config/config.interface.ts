/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'mongoose';

import { Core, Dto } from '../common';
import { ValueType } from '../../enums';

export interface Config extends Core {
  key: string;
  type: ValueType;
  value?: any;
}
// ----------------------------------------
// Data Object Model Interface
// ----------------------------------------

export type ConfigDto = Dto<Config>;
export type ConfigDoc = Config & Document;
