import { Policy } from './policy.interface';

export interface AuthorizationResponse {
  granted: boolean;
  policies: Policy[];
}

export type AuthorizationResponseInterface = AuthorizationResponse;
