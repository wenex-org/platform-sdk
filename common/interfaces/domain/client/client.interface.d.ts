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
import { Core, Dto, MakeOptional } from '../../common';
import { ClientDomain, ClientDomainDto } from './domain.interface';
import { ClientPlan, GrantType, Scope, State, Status } from '../../../enums';
import { ClientOtpService, ClientOtpServiceDto } from './otp-service.interface';
export type ApiToken = {
    cid: string;
    client_id: string;
    whitelist?: string[];
    expiration_date: Date;
};
export interface Client extends Core {
    name: string;
    plan: ClientPlan;
    url?: string;
    logo?: string;
    site?: string;
    slogan?: string;
    state: State;
    status: Status;
    client_id: string;
    client_secret: string;
    expiration_date: Date;
    access_token_ttl: number;
    refresh_token_ttl: number;
    scopes: Scope[];
    grant_types: GrantType[];
    api_key: string | ApiToken;
    whitelist?: string[];
    coworkers?: string[];
    redirect_uris?: string[];
    domains: ClientDomain[];
    otp_services: ClientOtpService[];
}
export type ClientDoc = Client & Document;
export type ClientDto = Dto<MakeOptional<Omit<Client, 'domains' | 'otp_services'>, 'state' | 'client_id' | 'access_token_ttl' | 'refresh_token_ttl'>> & {
    domains: ClientDomainDto[];
    otp_services?: ClientOtpServiceDto[];
};
