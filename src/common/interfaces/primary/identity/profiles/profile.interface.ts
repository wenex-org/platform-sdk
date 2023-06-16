import { Gender, PersonType, State } from '@app/common/enums';
import { BaseInterface } from '@app/common/interfaces';

import { PlaceInterface } from './index';

export interface Profile extends BaseInterface {
  state: State;
  gender: Gender;
  person_type: PersonType;

  cover?: string;
  avatar?: string;

  nickname?: string;
  last_name?: string;
  first_name?: string;
  middle_name?: string;

  nationality?: string;
  national_code?: string;

  places?: PlaceInterface[];
  birth_date?: Date;
}

export type ProfileInterface = Profile;
