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
exports.ConfigClient = void 0;
const configs_service_1 = require("./configs.service");
const settings_service_1 = require("./settings.service");
__exportStar(require("./configs.service"), exports);
class ConfigClient {
    constructor(axios) {
        this.axios = axios;
    }
    get configs() {
        var _a;
        return (this.$configs = (_a = this.$configs) !== null && _a !== void 0 ? _a : new configs_service_1.ConfigsService(this.axios));
    }
    get settings() {
        var _a;
        return (this.$settings = (_a = this.$settings) !== null && _a !== void 0 ? _a : new settings_service_1.SettingsService(this.axios));
    }
}
exports.ConfigClient = ConfigClient;
//# sourceMappingURL=index.js.map