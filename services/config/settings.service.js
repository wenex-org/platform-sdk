"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const classes_1 = require("../../common/classes");
class SettingsService extends classes_1.RestfulService {
    constructor(axios) {
        super('settings', axios);
        this.axios = axios;
    }
}
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map