import { GrantType, ResponseType, Scope, UserMFA, UserOAuth } from '../../../enums';
export interface AuthenticationRequest {
    grant_type: GrantType;
    client_id: string;
    client_secret?: string;
    strict?: boolean;
    domain?: string;
    app_id?: string;
    scopes?: Scope[];
    subjects?: string[];
    email?: string;
    phone?: string;
    username?: string;
    password?: string;
    code?: string;
    state?: string;
    redirect_uri?: string;
    response_type?: ResponseType;
    tz?: string;
    mfa?: UserMFA;
    i18n?: string;
    oauth?: UserOAuth;
    refresh_token?: string;
    confirmation_code?: string;
    coworkers?: string[];
}
