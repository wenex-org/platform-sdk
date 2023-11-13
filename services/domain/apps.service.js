"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsService = void 0;
const classes_1 = require("../../common/classes");
class AppsService extends classes_1.RestfulService {
    constructor(client) {
        super('apps', client);
        this.client = client;
    }
}
exports.AppsService = AppsService;
//# sourceMappingURL=apps.service.js.map