import { Policy } from './policy.interface';
export interface AuthorizationCanResponse {
    granted: boolean;
    policies: Policy[];
}
export interface AuthorizationPolicyResponse {
    policies: Policy[];
}
