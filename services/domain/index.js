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
exports.DomainClient = void 0;
const clients_service_1 = require("./clients.service");
const apps_service_1 = require("./apps.service");
__exportStar(require("./apps.service"), exports);
__exportStar(require("./clients.service"), exports);
class DomainClient {
    constructor(client) {
        this.client = client;
    }
    get apps() {
        var _a;
        return (this.$apps = (_a = this.$apps) !== null && _a !== void 0 ? _a : new apps_service_1.AppsService(this.client));
    }
    get clients() {
        var _a;
        return (this.$clients = (_a = this.$clients) !== null && _a !== void 0 ? _a : new clients_service_1.ClientsService(this.client));
    }
}
exports.DomainClient = DomainClient;
//# sourceMappingURL=index.js.map