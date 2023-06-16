import { Ability } from './index';

export interface AuthorizationResponse {
  granted: boolean;
  abilities: Ability[];
}

export type AuthorizationResponseInterface = AuthorizationResponse;
