"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformClient = void 0;
const classes_1 = require("./common/classes");
const services_1 = require("./services");
__exportStar(require("./services"), exports);
class PlatformClient {
    constructor(axios) {
        this.axios = axios;
    }
    get graphql() {
        var _a;
        return (this.$graphql = (_a = this.$graphql) !== null && _a !== void 0 ? _a : new classes_1.GraphqlService(this.axios));
    }
    get auth() {
        var _a;
        return (this.$auth = (_a = this.$auth) !== null && _a !== void 0 ? _a : new services_1.AuthClient(this.axios));
    }
    get domain() {
        var _a;
        return (this.$domain = (_a = this.$domain) !== null && _a !== void 0 ? _a : new services_1.DomainClient(this.axios));
    }
    get config() {
        var _a;
        return (this.$config = (_a = this.$config) !== null && _a !== void 0 ? _a : new services_1.ConfigClient(this.axios));
    }
    get identity() {
        var _a;
        return (this.$identity = (_a = this.$identity) !== null && _a !== void 0 ? _a : new services_1.IdentityClient(this.axios));
    }
}
exports.PlatformClient = PlatformClient;
//# sourceMappingURL=index.js.map