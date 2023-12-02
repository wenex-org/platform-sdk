"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantsService = void 0;
const classes_1 = require("../../common/classes");
class GrantsService extends classes_1.RestfulService {
    constructor(axios) {
        super('grants', axios);
        this.axios = axios;
    }
}
exports.GrantsService = GrantsService;
//# sourceMappingURL=grants.service.js.map