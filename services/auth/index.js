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
exports.AuthClient = void 0;
const grants_service_1 = require("./grants.service");
const authorization_service_1 = require("./authorization.service");
const authentication_service_1 = require("./authentication.service");
__exportStar(require("./grants.service"), exports);
__exportStar(require("./authorization.service"), exports);
__exportStar(require("./authentication.service"), exports);
class AuthClient {
    constructor(client) {
        this.client = client;
    }
    get grants() {
        var _a;
        return (this.$grants = (_a = this.$grants) !== null && _a !== void 0 ? _a : new grants_service_1.GrantsService(this.client));
    }
    get authorization() {
        var _a;
        return (this.$authorization =
            (_a = this.$authorization) !== null && _a !== void 0 ? _a : authorization_service_1.Authorization.build(this.client));
    }
    get authentication() {
        var _a;
        return (this.$authentication =
            (_a = this.$authentication) !== null && _a !== void 0 ? _a : authentication_service_1.Authentication.build(this.client));
    }
}
exports.AuthClient = AuthClient;
//# sourceMappingURL=index.js.map