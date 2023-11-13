import { Document } from 'mongoose';
import { Core, Dto } from '../common';
import { ValueType } from '../../enums';
export interface Config extends Core {
    key: string;
    type: ValueType;
    value?: any;
}
export type ConfigDto = Dto<Config>;
export type ConfigDoc = Config & Document;
