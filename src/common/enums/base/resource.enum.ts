export enum Resource {
  // Keyword
  All = 'all',

  // Primary
  Configs = 'configs',

  Auth = 'auth:all',
  AuthGrants = 'auth:grants',
  AuthAuthorization = 'auth:authorization',
  AuthAuthentication = 'auth:authentication',

  Domain = 'domain:all',
  DomainApps = 'domain:apps',
  DomainClients = 'domain:clients',

  Identity = 'identity:all',
  IdentityUsers = 'identity:users',
  IdentityProfiles = 'identity:profiles',
  IdentitySessions = 'identity:sessions',

  // Premium
  General = 'general:all',
  GeneralArtifacts = 'general:artifacts',
}
