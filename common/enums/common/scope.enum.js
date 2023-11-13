"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = void 0;
var Scope;
(function (Scope) {
    // Keyword
    Scope["Whole"] = "whole";
    // ----------------------------
    // Common Actions
    // ----------------------------
    Scope["Read"] = "read";
    Scope["Write"] = "write";
    Scope["Manage"] = "manage";
    // ----------------------------
    // Special Actions
    // ----------------------------
    Scope["Emit"] = "emit";
    Scope["Send"] = "send";
    Scope["Init"] = "init";
    Scope["Verify"] = "verify";
    Scope["Upload"] = "upload";
    Scope["Download"] = "download";
    // ----------------------------
    // Scoped Actions
    // ----------------------------
    Scope["ManageAuth"] = "m:auth";
    Scope["ReadAuthGrants"] = "r:auth:grants";
    Scope["WriteAuthGrants"] = "w:auth:grants";
    Scope["ManageAuthGrants"] = "m:auth:grants";
    Scope["ManageConfig"] = "m:config";
    Scope["ReadConfigConfigs"] = "r:config:configs";
    Scope["WriteConfigConfigs"] = "w:config:configs";
    Scope["ManageConfigConfigs"] = "m:config:configs";
    Scope["ManageDomain"] = "m:domain";
    Scope["ReadDomainApps"] = "r:domain:apps";
    Scope["WriteDomainApps"] = "w:domain:apps";
    Scope["ManageDomainApps"] = "m:domain:apps";
    Scope["ReadDomainClients"] = "r:domain:clients";
    Scope["WriteDomainClients"] = "w:domain:clients";
    Scope["ManageDomainClients"] = "m:domain:clients";
    Scope["ManageIdentity"] = "m:identity";
    Scope["ReadIdentityUsers"] = "r:identity:users";
    Scope["WriteIdentityUsers"] = "w:identity:users";
    Scope["ManageIdentityUsers"] = "m:identity:users";
    Scope["ReadIdentityProfiles"] = "r:identity:profiles";
    Scope["WriteIdentityProfiles"] = "w:identity:profiles";
    Scope["ManageIdentityProfiles"] = "m:identity:profiles";
    Scope["ReadIdentitySessions"] = "r:identity:sessions";
    Scope["WriteIdentitySessions"] = "w:identity:sessions";
    Scope["ManageIdentitySessions"] = "m:identity:sessions";
})(Scope || (exports.Scope = Scope = {}));
//# sourceMappingURL=scope.enum.js.map