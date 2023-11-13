import type { Document } from 'mongoose';
import { GrantTime } from './time.interface';
import { Core, Dto } from '../../../interfaces';
import { Action, Resource } from '../../../enums';
export interface Grant extends Core {
    subject: string;
    action: Action;
    object: Resource;
    field?: string[];
    filter?: string[];
    location?: string[];
    time?: GrantTime[];
}
export type GrantDto = Dto<Omit<Grant, 'time'>> & {
    time?: Dto<GrantTime>[];
};
export type GrantDoc = Grant & Document;
