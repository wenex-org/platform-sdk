"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsService = void 0;
const classes_1 = require("../../common/classes");
class AppsService extends classes_1.RestfulService {
    constructor(axios) {
        super('apps', axios);
        this.axios = axios;
    }
}
exports.AppsService = AppsService;
//# sourceMappingURL=apps.service.js.map