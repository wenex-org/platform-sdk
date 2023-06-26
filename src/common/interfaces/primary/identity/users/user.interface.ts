import { BaseInterface } from '../../../../../common/interfaces';
import { Status } from '../../../../../common/enums';

export interface User extends BaseInterface {
  status: Status;

  phone?: string;
  email?: string;

  username?: string;
  password?: string;

  subjects?: string[];

  verified_at?: Date;
  verified_by?: string;
  verified_in?: string;
}

export type UserInterface = User;
