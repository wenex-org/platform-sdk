"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
var Resource;
(function (Resource) {
    // Keyword
    Resource["All"] = "all";
    // ----------------------------
    // Scoped Resources
    // ----------------------------
    Resource["Auth"] = "auth:all";
    Resource["AuthGrants"] = "auth:grants";
    Resource["Config"] = "config:all";
    Resource["ConfigConfigs"] = "config:configs";
    Resource["Domain"] = "domain:all";
    Resource["DomainApps"] = "domain:apps";
    Resource["DomainClients"] = "domain:clients";
    Resource["Identity"] = "identity:all";
    Resource["IdentityUsers"] = "identity:users";
    Resource["IdentityProfiles"] = "identity:profiles";
    Resource["IdentitySessions"] = "identity:sessions";
})(Resource || (exports.Resource = Resource = {}));
//# sourceMappingURL=resource.enum.js.map