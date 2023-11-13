"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsService = void 0;
const classes_1 = require("../../common/classes");
class ConfigsService extends classes_1.RestfulService {
    constructor(client) {
        super('configs', client);
        this.client = client;
    }
}
exports.ConfigsService = ConfigsService;
//# sourceMappingURL=configs.service.js.map