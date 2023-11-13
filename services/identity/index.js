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
exports.IdentityClient = void 0;
const profiles_service_1 = require("./profiles.service");
const sessions_service_1 = require("./sessions.service");
const users_service_1 = require("./users.service");
__exportStar(require("./users.service"), exports);
__exportStar(require("./profiles.service"), exports);
__exportStar(require("./sessions.service"), exports);
class IdentityClient {
    constructor(client) {
        this.client = client;
    }
    get users() {
        var _a;
        return (this.$users = (_a = this.$users) !== null && _a !== void 0 ? _a : new users_service_1.UsersService(this.client));
    }
    get profiles() {
        var _a;
        return (this.$profiles = (_a = this.$profiles) !== null && _a !== void 0 ? _a : new profiles_service_1.ProfilesService(this.client));
    }
    get sessions() {
        var _a;
        return (this.$sessions = (_a = this.$sessions) !== null && _a !== void 0 ? _a : new sessions_service_1.SessionsService(this.client));
    }
}
exports.IdentityClient = IdentityClient;
//# sourceMappingURL=index.js.map