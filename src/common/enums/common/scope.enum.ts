export enum Scope {
  // Keyword
  Whole = 'whole',

  // ----------------------------
  // Common Actions
  // ----------------------------

  Read = 'read',
  Write = 'write',
  Manage = 'manage',

  // ----------------------------
  // Special Actions
  // ----------------------------

  Emit = 'emit',
  Send = 'send',

  Init = 'init',
  Verify = 'verify',

  Upload = 'upload',
  Download = 'download',

  // ----------------------------
  // Scoped Actions
  // ----------------------------

  ManageAuth = 'm:auth',
  ReadAuthGrants = 'r:auth:grants',
  WriteAuthGrants = 'w:auth:grants',
  ManageAuthGrants = 'm:auth:grants',

  ManageConfig = 'm:config',
  ReadConfigConfigs = 'r:config:configs',
  WriteConfigConfigs = 'w:config:configs',
  ManageConfigConfigs = 'm:config:configs',

  ManageDomain = 'm:domain',
  ReadDomainApps = 'r:domain:apps',
  WriteDomainApps = 'w:domain:apps',
  ManageDomainApps = 'm:domain:apps',
  ReadDomainClients = 'r:domain:clients',
  WriteDomainClients = 'w:domain:clients',
  ManageDomainClients = 'm:domain:clients',

  ManageIdentity = 'm:identity',
  ReadIdentityUsers = 'r:identity:users',
  WriteIdentityUsers = 'w:identity:users',
  ManageIdentityUsers = 'm:identity:users',
  ReadIdentityProfiles = 'r:identity:profiles',
  WriteIdentityProfiles = 'w:identity:profiles',
  ManageIdentityProfiles = 'm:identity:profiles',
  ReadIdentitySessions = 'r:identity:sessions',
  WriteIdentitySessions = 'w:identity:sessions',
  ManageIdentitySessions = 'm:identity:sessions',
}
