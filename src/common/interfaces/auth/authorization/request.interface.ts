export interface AuthorizationCanRequest {
  token?: string;
  strict?: string;
  subject?: string;

  action: string;
  object: string;

  tz?: string;

  ip?: string;
  time?: Date;
}

export interface AuthorizationPolicyRequest {
  token?: string;
  strict?: string;
  subject?: string;

  action?: string;
  object?: string;
}
