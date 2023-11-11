import type { Document } from 'mongoose';

import { Core, Dto, MakeOptional } from '../common';
import { Status, UserMFA, UserOAuth } from '../../enums';

export interface User extends Core {
  status: Status;

  tz: string;
  mfa?: UserMFA;
  i18n: string;
  oauth?: UserOAuth[];
  secret?: string;

  email?: string;
  phone?: string;

  username?: string;
  password?: string;

  subjects: string[];
}

// ----------------------------------------
// Data Object Model Interface
// ----------------------------------------

export type UserDom = Dto<MakeOptional<User, 'tz' | 'i18n'>>;
export type UserDoc = User & Document;
