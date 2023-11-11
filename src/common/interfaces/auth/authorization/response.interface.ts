import { Policy } from './policy.interface';

export interface AuthorizationCanResponse {
  granted: boolean;
}

export interface AuthorizationPolicyResponse {
  policies: Policy[];
}
