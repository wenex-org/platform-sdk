/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import type { Document } from 'mongoose';
import { Core, Dto, MakeOptional } from '../common';
import { Gender, ProfileType, State } from '../../enums';
export interface Profile extends Core {
    type: ProfileType;
    state: State;
    gender: Gender;
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
export type ProfileDoc = Profile & Document;
export type ProfileDto = Dto<MakeOptional<Profile, 'state' | 'gender' | 'type'>>;
