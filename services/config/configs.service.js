"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsService = void 0;
const classes_1 = require("../../common/classes");
class ConfigsService extends classes_1.RestfulService {
    constructor(axios) {
        super('configs', axios);
        this.axios = axios;
    }
}
exports.ConfigsService = ConfigsService;
//# sourceMappingURL=configs.service.js.map