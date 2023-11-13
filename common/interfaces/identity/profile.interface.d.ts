import type { Document } from 'mongoose';
import { Core, Dto, MakeOptional } from '../common';
import { Gender, ProfilePersonType, State } from '../../enums';
export interface Profile extends Core {
    state: State;
    gender: Gender;
    person_type: ProfilePersonType;
    cover?: string;
    avatar?: string;
    nickname?: string;
    last_name?: string;
    first_name?: string;
    middle_name?: string;
    nationality?: string;
    national_code?: string;
    verified_at?: Date;
    verified_by?: string;
    verified_in?: string;
    birth_date?: Date;
}
export type ProfileDto = Dto<MakeOptional<Profile, 'state' | 'gender' | 'person_type'>>;
export type ProfileDoc = Profile & Document;
