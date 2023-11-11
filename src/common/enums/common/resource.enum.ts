export enum Resource {
  // Keyword
  All = 'all',

  // ----------------------------
  // Scoped Resources
  // ----------------------------

  Auth = 'auth:all',
  AuthGrants = 'auth:grants',

  Config = 'config:all',
  ConfigConfigs = 'config:configs',

  Domain = 'domain:all',
  DomainApps = 'domain:apps',
  DomainClients = 'domain:clients',

  Identity = 'identity:all',
  IdentityUsers = 'identity:users',
  IdentityProfiles = 'identity:profiles',
  IdentitySessions = 'identity:sessions',
}
