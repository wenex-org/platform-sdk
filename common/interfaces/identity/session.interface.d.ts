import type { Document } from 'mongoose';
import { Core, Dto } from '../common';
export interface Session extends Core {
    ip: string;
    agent: string;
    expiration_date: Date;
}
export type SessionDto = Dto<Session>;
export type SessionDoc = Session & Document;
