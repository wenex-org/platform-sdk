/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Date custom scalar type */
  Date: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export enum Action {
  Any = 'Any',
  Create = 'Create',
  CreateClient = 'CreateClient',
  CreateGroup = 'CreateGroup',
  CreateOwn = 'CreateOwn',
  CreateShare = 'CreateShare',
  Delete = 'Delete',
  DeleteClient = 'DeleteClient',
  DeleteGroup = 'DeleteGroup',
  DeleteOwn = 'DeleteOwn',
  DeleteShare = 'DeleteShare',
  Destroy = 'Destroy',
  DestroyClient = 'DestroyClient',
  DestroyGroup = 'DestroyGroup',
  DestroyOwn = 'DestroyOwn',
  DestroyShare = 'DestroyShare',
  Read = 'Read',
  ReadClient = 'ReadClient',
  ReadGroup = 'ReadGroup',
  ReadOwn = 'ReadOwn',
  ReadShare = 'ReadShare',
  Restore = 'Restore',
  RestoreClient = 'RestoreClient',
  RestoreGroup = 'RestoreGroup',
  RestoreOwn = 'RestoreOwn',
  RestoreShare = 'RestoreShare',
  Update = 'Update',
  UpdateClient = 'UpdateClient',
  UpdateGroup = 'UpdateGroup',
  UpdateOwn = 'UpdateOwn',
  UpdateShare = 'UpdateShare',
}

export type AppSerializer = {
  __typename?: 'AppSerializer';
  access_token_ttl: Scalars['Float']['output'];
  change_logs?: Maybe<Array<ChangeLogSerializer>>;
  cid: Scalars['String']['output'];
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  grant_types: Array<GrantType>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  redirect_uri?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  refresh_token_ttl: Scalars['Float']['output'];
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scopes: Array<Scope>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  site?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  status: Status;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type: AppType;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum AppType {
  Application = 'Application',
  Desktop = 'Desktop',
  Mobile = 'Mobile',
  Web = 'Web',
}

export type AppsSerializer = {
  __typename?: 'AppsSerializer';
  data: Array<AppSerializer>;
};

export type ArtifactSerializer = {
  __typename?: 'ArtifactSerializer';
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  key: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type: ValueType;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ArtifactsSerializer = {
  __typename?: 'ArtifactsSerializer';
  data: Array<ArtifactSerializer>;
};

export type ChangeLogSerializer = {
  __typename?: 'ChangeLogSerializer';
  changes?: Maybe<Array<Scalars['String']['output']>>;
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  deprecated_at?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  uid: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ClientSerializer = {
  __typename?: 'ClientSerializer';
  access_token_ttl: Scalars['Float']['output'];
  api_key: Scalars['String']['output'];
  client_id: Scalars['String']['output'];
  client_secret: Scalars['String']['output'];
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domains: Array<DomainSerializer>;
  expiration_date: Scalars['Date']['output'];
  grant_types: Array<GrantType>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  otp_services: Array<OtpServiceSerializer>;
  owner: Scalars['String']['output'];
  plan: Plan;
  props?: Maybe<Scalars['JSON']['output']>;
  redirect_uri?: Maybe<Scalars['String']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  refresh_token_ttl: Scalars['Float']['output'];
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  scopes: Array<Scope>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  site?: Maybe<Scalars['String']['output']>;
  slogan?: Maybe<Scalars['String']['output']>;
  state: State;
  status: Status;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ClientsSerializer = {
  __typename?: 'ClientsSerializer';
  data: Array<ClientSerializer>;
};

export type ConfigSerializer = {
  __typename?: 'ConfigSerializer';
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  key: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type: ValueType;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ConfigsSerializer = {
  __typename?: 'ConfigsSerializer';
  data: Array<ConfigSerializer>;
};

export type CreateAppDto = {
  access_token_ttl: Scalars['Float']['input'];
  change_logs?: InputMaybe<Array<CreateChangeLogDto>>;
  cid: Scalars['String']['input'];
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  grant_types: Array<GrantType>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  redirect_uri?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl: Scalars['Float']['input'];
  scopes: Array<Scope>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: AppType;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArtifactDto = {
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  key: Scalars['String']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ValueType;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateChangeLogDto = {
  changes?: InputMaybe<Array<Scalars['String']['input']>>;
  code: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  deprecated_at?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClientDto = {
  access_token_ttl: Scalars['Float']['input'];
  api_key: Scalars['String']['input'];
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domains: Array<CreateDomainDto>;
  expiration_date: Scalars['Date']['input'];
  grant_types: Array<GrantType>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  otp_services: Array<CreateOtpServiceDto>;
  plan: Plan;
  props?: InputMaybe<Scalars['JSON']['input']>;
  redirect_uri?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl: Scalars['Float']['input'];
  scopes: Array<Scope>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state: State;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateConfigDto = {
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  key: Scalars['String']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ValueType;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDomainDto = {
  address: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  roles: Array<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGrantDto = {
  action: Action;
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Array<Scalars['String']['input']>>;
  object: Resource;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  time?: InputMaybe<Array<CreateTimeDto>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOtpServiceDto = {
  config: Scalars['JSON']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider: OtpProvider;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: OtpType;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePlaceDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: PlaceType;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProfileDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  clients: Array<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender: Gender;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  national_code?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person_type: PersonType;
  places?: InputMaybe<Array<CreatePlaceDto>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state: State;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSessionDto = {
  agent: Scalars['String']['input'];
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTimeDto = {
  cron_exp: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Float']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserDto = {
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  verified_by?: InputMaybe<Scalars['String']['input']>;
  verified_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type DomainSerializer = {
  __typename?: 'DomainSerializer';
  address: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  roles: Array<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  status: Status;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  uid: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type FilterDto = {
  pagination?: InputMaybe<Scalars['JSON']['input']>;
  projection?: InputMaybe<Scalars['JSON']['input']>;
  query: Scalars['JSON']['input'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown',
}

export type GrantSerializer = {
  __typename?: 'GrantSerializer';
  action: Action;
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Array<Scalars['String']['output']>>;
  filter?: Maybe<Array<Scalars['String']['output']>>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Array<Scalars['String']['output']>>;
  object: Resource;
  owner: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  subject: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  time?: Maybe<Array<TimeSerializer>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum GrantType {
  AuthorizationCode = 'AuthorizationCode',
  ClientCredential = 'ClientCredential',
  Otp = 'OTP',
  Password = 'Password',
  RefreshToken = 'RefreshToken',
}

export type GrantsSerializer = {
  __typename?: 'GrantsSerializer';
  data: Array<GrantSerializer>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApp: AppSerializer;
  createArtifact: ArtifactSerializer;
  createClient: ClientSerializer;
  createConfig: ConfigSerializer;
  createGrant: GrantSerializer;
  createProfile: ProfileSerializer;
  createSession: SessionSerializer;
  createUser: UserSerializer;
  deleteApp: AppSerializer;
  deleteArtifact: ArtifactSerializer;
  deleteClient: ClientSerializer;
  deleteConfig: ConfigSerializer;
  deleteGrant: GrantSerializer;
  deleteProfile: ProfileSerializer;
  deleteSession: SessionSerializer;
  deleteUser: UserSerializer;
  destroyApp: AppSerializer;
  destroyArtifact: ArtifactSerializer;
  destroyClient: ClientSerializer;
  destroyConfig: ConfigSerializer;
  destroyGrant: GrantSerializer;
  destroyProfile: ProfileSerializer;
  destroySession: SessionSerializer;
  destroyUser: UserSerializer;
  restoreApp: AppSerializer;
  restoreArtifact: ArtifactSerializer;
  restoreClient: ClientSerializer;
  restoreConfig: ConfigSerializer;
  restoreGrant: GrantSerializer;
  restoreProfile: ProfileSerializer;
  restoreSession: SessionSerializer;
  restoreUser: UserSerializer;
  updateApp: AppSerializer;
  updateApps: TotalSerializer;
  updateArtifact: ArtifactSerializer;
  updateArtifacts: TotalSerializer;
  updateClient: ClientSerializer;
  updateClients: TotalSerializer;
  updateConfig: ConfigSerializer;
  updateConfigs: TotalSerializer;
  updateGrant: GrantSerializer;
  updateGrants: TotalSerializer;
  updateProfile: ProfileSerializer;
  updateProfiles: TotalSerializer;
  updateSession: SessionSerializer;
  updateSessions: TotalSerializer;
  updateUser: UserSerializer;
  updateUsers: TotalSerializer;
};

export type MutationCreateAppArgs = {
  data: CreateAppDto;
};

export type MutationCreateArtifactArgs = {
  data: CreateArtifactDto;
};

export type MutationCreateClientArgs = {
  data: CreateClientDto;
};

export type MutationCreateConfigArgs = {
  data: CreateConfigDto;
};

export type MutationCreateGrantArgs = {
  data: CreateGrantDto;
};

export type MutationCreateProfileArgs = {
  data: CreateProfileDto;
};

export type MutationCreateSessionArgs = {
  data: CreateSessionDto;
};

export type MutationCreateUserArgs = {
  data: CreateUserDto;
};

export type MutationDeleteAppArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteArtifactArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteClientArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteConfigArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteGrantArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteSessionArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyAppArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyArtifactArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyClientArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyConfigArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyGrantArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyProfileArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroySessionArgs = {
  id: Scalars['String']['input'];
};

export type MutationDestroyUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreAppArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreArtifactArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreClientArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreConfigArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreGrantArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreProfileArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreSessionArgs = {
  id: Scalars['String']['input'];
};

export type MutationRestoreUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationUpdateAppArgs = {
  data: UpdateAppDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateAppsArgs = {
  data: UpdateAppDto;
  filter: QueryFilterDto;
};

export type MutationUpdateArtifactArgs = {
  data: UpdateArtifactDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateArtifactsArgs = {
  data: UpdateArtifactDto;
  filter: QueryFilterDto;
};

export type MutationUpdateClientArgs = {
  data: UpdateClientDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateClientsArgs = {
  data: UpdateClientDto;
  filter: QueryFilterDto;
};

export type MutationUpdateConfigArgs = {
  data: UpdateConfigDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateConfigsArgs = {
  data: UpdateConfigDto;
  filter: QueryFilterDto;
};

export type MutationUpdateGrantArgs = {
  data: UpdateGrantDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateGrantsArgs = {
  data: UpdateGrantDto;
  filter: QueryFilterDto;
};

export type MutationUpdateProfileArgs = {
  data: UpdateProfileDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateProfilesArgs = {
  data: UpdateProfileDto;
  filter: QueryFilterDto;
};

export type MutationUpdateSessionArgs = {
  data: UpdateSessionDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateSessionsArgs = {
  data: UpdateSessionDto;
  filter: QueryFilterDto;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserDto;
  id: Scalars['String']['input'];
};

export type MutationUpdateUsersArgs = {
  data: UpdateUserDto;
  filter: QueryFilterDto;
};

export enum OtpProvider {
  Unknown = 'Unknown',
  Wenex = 'Wenex',
}

export type OtpServiceSerializer = {
  __typename?: 'OtpServiceSerializer';
  config: Scalars['JSON']['output'];
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  provider: OtpProvider;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type: OtpType;
  uid: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum OtpType {
  Call = 'Call',
  Email = 'Email',
  Sms = 'SMS',
}

export enum PersonType {
  Legal = 'Legal',
  Real = 'Real',
}

export type PlaceSerializer = {
  __typename?: 'PlaceSerializer';
  address?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  type: PlaceType;
  uid: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum PlaceType {
  Favor = 'Favor',
  Home = 'Home',
  Work = 'Work',
}

export enum Plan {
  Aluminum = 'Aluminum',
  Gold = 'Gold',
  Platinum = 'Platinum',
}

export type PolicySerializer = {
  __typename?: 'PolicySerializer';
  action: Action;
  field?: Maybe<Array<Scalars['String']['output']>>;
  filter?: Maybe<Array<Scalars['String']['output']>>;
  location?: Maybe<Array<Scalars['String']['output']>>;
  object: Resource;
  subject: Scalars['String']['output'];
  time?: Maybe<Array<PolicyTimeSerializer>>;
};

export type PolicyTimeSerializer = {
  __typename?: 'PolicyTimeSerializer';
  cron_exp: Scalars['String']['output'];
  duration: Scalars['Float']['output'];
};

export type ProfileSerializer = {
  __typename?: 'ProfileSerializer';
  avatar?: Maybe<Scalars['String']['output']>;
  birth_date?: Maybe<Scalars['Date']['output']>;
  clients: Array<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender: Gender;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  middle_name?: Maybe<Scalars['String']['output']>;
  national_code?: Maybe<Scalars['String']['output']>;
  nationality?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  owner: Scalars['String']['output'];
  person_type: PersonType;
  places?: Maybe<Array<PlaceSerializer>>;
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  state: State;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ProfilesSerializer = {
  __typename?: 'ProfilesSerializer';
  data: Array<ProfileSerializer>;
};

export type Query = {
  __typename?: 'Query';
  countApp: TotalSerializer;
  countArtifact: TotalSerializer;
  countClient: TotalSerializer;
  countConfig: TotalSerializer;
  countGrant: TotalSerializer;
  countProfile: TotalSerializer;
  countSession: TotalSerializer;
  countUser: TotalSerializer;
  findApp: AppSerializer;
  findApps: AppsSerializer;
  findArtifact: ArtifactSerializer;
  findArtifacts: ArtifactsSerializer;
  findClient: ClientSerializer;
  findClients: ClientsSerializer;
  findConfig: ConfigSerializer;
  findConfigs: ConfigsSerializer;
  findGrant: GrantSerializer;
  findGrants: GrantsSerializer;
  findProfile: ProfileSerializer;
  findProfiles: ProfilesSerializer;
  findSession: SessionSerializer;
  findSessions: SessionsSerializer;
  findUser: UserSerializer;
  findUsers: UsersSerializer;
};

export type QueryCountAppArgs = {
  filter: QueryFilterDto;
};

export type QueryCountArtifactArgs = {
  filter: QueryFilterDto;
};

export type QueryCountClientArgs = {
  filter: QueryFilterDto;
};

export type QueryCountConfigArgs = {
  filter: QueryFilterDto;
};

export type QueryCountGrantArgs = {
  filter: QueryFilterDto;
};

export type QueryCountProfileArgs = {
  filter: QueryFilterDto;
};

export type QueryCountSessionArgs = {
  filter: QueryFilterDto;
};

export type QueryCountUserArgs = {
  filter: QueryFilterDto;
};

export type QueryFindAppArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindAppsArgs = {
  filter: FilterDto;
};

export type QueryFindArtifactArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindArtifactsArgs = {
  filter: FilterDto;
};

export type QueryFindClientArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindClientsArgs = {
  filter: FilterDto;
};

export type QueryFindConfigArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindConfigsArgs = {
  filter: FilterDto;
};

export type QueryFindGrantArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindGrantsArgs = {
  filter: FilterDto;
};

export type QueryFindProfileArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindProfilesArgs = {
  filter: FilterDto;
};

export type QueryFindSessionArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindSessionsArgs = {
  filter: FilterDto;
};

export type QueryFindUserArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindUsersArgs = {
  filter: FilterDto;
};

export type QueryFilterDto = {
  query: Scalars['JSON']['input'];
};

export enum Resource {
  All = 'All',
  Auth = 'Auth',
  AuthAuthentication = 'AuthAuthentication',
  AuthAuthorization = 'AuthAuthorization',
  AuthGrants = 'AuthGrants',
  Configs = 'Configs',
  Domain = 'Domain',
  DomainApps = 'DomainApps',
  DomainClients = 'DomainClients',
  General = 'General',
  GeneralArtifacts = 'GeneralArtifacts',
  Identity = 'Identity',
  IdentityProfiles = 'IdentityProfiles',
  IdentitySessions = 'IdentitySessions',
  IdentityUsers = 'IdentityUsers',
}

export enum Scope {
  Manage = 'Manage',
  ManageAuth = 'ManageAuth',
  ManageAuthGrants = 'ManageAuthGrants',
  ManageConfigs = 'ManageConfigs',
  ManageDomain = 'ManageDomain',
  ManageDomainApps = 'ManageDomainApps',
  ManageDomainClients = 'ManageDomainClients',
  ManageGeneral = 'ManageGeneral',
  ManageGeneralArtifacts = 'ManageGeneralArtifacts',
  ManageIdentity = 'ManageIdentity',
  ManageIdentityProfiles = 'ManageIdentityProfiles',
  ManageIdentitySessions = 'ManageIdentitySessions',
  ManageIdentityUsers = 'ManageIdentityUsers',
  Read = 'Read',
  ReadAuthGrants = 'ReadAuthGrants',
  ReadConfigs = 'ReadConfigs',
  ReadDomain = 'ReadDomain',
  ReadDomainApps = 'ReadDomainApps',
  ReadDomainClients = 'ReadDomainClients',
  ReadGeneral = 'ReadGeneral',
  ReadGeneralArtifacts = 'ReadGeneralArtifacts',
  ReadIdentity = 'ReadIdentity',
  ReadIdentityProfiles = 'ReadIdentityProfiles',
  ReadIdentitySessions = 'ReadIdentitySessions',
  ReadIdentityUsers = 'ReadIdentityUsers',
  Whole = 'Whole',
  Write = 'Write',
  WriteAuthGrants = 'WriteAuthGrants',
  WriteConfigs = 'WriteConfigs',
  WriteDomain = 'WriteDomain',
  WriteDomainApps = 'WriteDomainApps',
  WriteDomainClients = 'WriteDomainClients',
  WriteGeneral = 'WriteGeneral',
  WriteGeneralArtifacts = 'WriteGeneralArtifacts',
  WriteIdentity = 'WriteIdentity',
  WriteIdentityProfiles = 'WriteIdentityProfiles',
  WriteIdentitySessions = 'WriteIdentitySessions',
  WriteIdentityUsers = 'WriteIdentityUsers',
}

export type SessionSerializer = {
  __typename?: 'SessionSerializer';
  agent: Scalars['String']['output'];
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  owner: Scalars['String']['output'];
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type SessionsSerializer = {
  __typename?: 'SessionsSerializer';
  data: Array<SessionSerializer>;
};

export enum State {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected',
  Unknown = 'Unknown',
  Verified = 'Verified',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type TimeSerializer = {
  __typename?: 'TimeSerializer';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  cron_exp: Scalars['String']['output'];
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Float']['output'];
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  uid: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type TotalSerializer = {
  __typename?: 'TotalSerializer';
  total: Scalars['Int']['output'];
};

export type UpdateAppDto = {
  access_token_ttl: Scalars['Float']['input'];
  change_logs?: InputMaybe<Array<UpdateChangeLogDto>>;
  cid: Scalars['String']['input'];
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  grant_types: Array<GrantType>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  redirect_uri?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl: Scalars['Float']['input'];
  scopes: Array<Scope>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: AppType;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArtifactDto = {
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  key: Scalars['String']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ValueType;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChangeLogDto = {
  changes?: InputMaybe<Array<Scalars['String']['input']>>;
  code: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  deprecated_at?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateClientDto = {
  access_token_ttl: Scalars['Float']['input'];
  api_key: Scalars['String']['input'];
  client_id: Scalars['String']['input'];
  client_secret: Scalars['String']['input'];
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domains: Array<UpdateDomainDto>;
  expiration_date: Scalars['Date']['input'];
  grant_types: Array<GrantType>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  otp_services: Array<UpdateOtpServiceDto>;
  plan: Plan;
  props?: InputMaybe<Scalars['JSON']['input']>;
  redirect_uri?: InputMaybe<Scalars['String']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refresh_token_ttl: Scalars['Float']['input'];
  scopes: Array<Scope>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  site?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  state: State;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  url?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConfigDto = {
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  key: Scalars['String']['input'];
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ValueType;
  value?: InputMaybe<Scalars['JSON']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDomainDto = {
  address: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  roles: Array<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGrantDto = {
  action: Action;
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Array<Scalars['String']['input']>>;
  filter?: InputMaybe<Array<Scalars['String']['input']>>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Array<Scalars['String']['input']>>;
  object: Resource;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  subject: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  time?: InputMaybe<Array<UpdateTimeDto>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOtpServiceDto = {
  config: Scalars['JSON']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  provider: OtpProvider;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: OtpType;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePlaceDto = {
  address?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  type: PlaceType;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  birth_date?: InputMaybe<Scalars['Date']['input']>;
  clients: Array<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender: Gender;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  national_code?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  person_type: PersonType;
  places?: InputMaybe<Array<UpdatePlaceDto>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  state: State;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSessionDto = {
  agent: Scalars['String']['input'];
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTimeDto = {
  cron_exp: Scalars['String']['input'];
  deleted_at?: InputMaybe<Scalars['Date']['input']>;
  deleted_by?: InputMaybe<Scalars['String']['input']>;
  deleted_in?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration: Scalars['Float']['input'];
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  restored_at?: InputMaybe<Scalars['Date']['input']>;
  restored_by?: InputMaybe<Scalars['String']['input']>;
  restored_in?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  uid: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  updated_by?: InputMaybe<Scalars['String']['input']>;
  updated_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  clients: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<Scalars['String']['input']>>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  props?: InputMaybe<Scalars['JSON']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  shares?: InputMaybe<Array<Scalars['String']['input']>>;
  status: Status;
  subjects?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified_at?: InputMaybe<Scalars['Date']['input']>;
  verified_by?: InputMaybe<Scalars['String']['input']>;
  verified_in?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type UserSerializer = {
  __typename?: 'UserSerializer';
  clients: Array<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  created_in?: Maybe<Scalars['String']['output']>;
  deleted_at?: Maybe<Scalars['Date']['output']>;
  deleted_by?: Maybe<Scalars['String']['output']>;
  deleted_in?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  owner: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Scalars['JSON']['output']>;
  ref?: Maybe<Scalars['String']['output']>;
  restored_at?: Maybe<Scalars['Date']['output']>;
  restored_by?: Maybe<Scalars['String']['output']>;
  restored_in?: Maybe<Scalars['String']['output']>;
  shares?: Maybe<Array<Scalars['String']['output']>>;
  status: Status;
  subjects?: Maybe<Array<Scalars['String']['output']>>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_by?: Maybe<Scalars['String']['output']>;
  updated_in?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  verified_at?: Maybe<Scalars['Date']['output']>;
  verified_by?: Maybe<Scalars['String']['output']>;
  verified_in?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type UsersSerializer = {
  __typename?: 'UsersSerializer';
  data: Array<UserSerializer>;
};

export enum ValueType {
  Array = 'Array',
  Boolean = 'Boolean',
  Null = 'Null',
  Number = 'Number',
  Object = 'Object',
  String = 'String',
}
