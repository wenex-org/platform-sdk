"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const classes_1 = require("../../common/classes");
class ProfilesService extends classes_1.RestfulService {
    constructor(axios) {
        super('profiles', axios);
        this.axios = axios;
    }
}
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profiles.service.js.map