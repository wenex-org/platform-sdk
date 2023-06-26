export enum Scope {
  /**
   * Keyword
   */
  Whole = 'whole',

  /**
   * Special
   */
  Read = 'read',
  Write = 'write',
  Manage = 'manage',

  /**
   * Primary
   */

  // Auth

  ManageAuth = 'm:auth',

  ReadAuthGrants = 'r:auth:grants',
  WriteAuthGrants = 'w:auth:grants',
  ManageAuthGrants = 'm:auth:grants',

  // Configs

  ReadConfigs = 'r:configs',
  WriteConfigs = 'w:configs',
  ManageConfigs = 'm:configs',

  // Identity

  ReadIdentity = 'r:identity',
  WriteIdentity = 'w:identity',
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

  // Domain

  ReadDomain = 'r:domain',
  WriteDomain = 'w:domain',
  ManageDomain = 'm:domain',

  ReadDomainApps = 'r:domain:apps',
  WriteDomainApps = 'w:domain:apps',
  ManageDomainApps = 'm:domain:apps',

  ReadDomainClients = 'r:domain:clients',
  WriteDomainClients = 'w:domain:clients',
  ManageDomainClients = 'm:domain:clients',

  /**
   * Premium
   */

  // General

  ReadGeneral = 'r:general',
  WriteGeneral = 'w:general',
  ManageGeneral = 'm:general',

  ReadGeneralArtifacts = 'r:general:artifacts',
  WriteGeneralArtifacts = 'w:general:artifacts',
  ManageGeneralArtifacts = 'm:general:artifacts',
}
