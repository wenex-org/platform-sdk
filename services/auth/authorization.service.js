"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const providers_1 = require("../../common/providers");
class Authorization {
    constructor(request) {
        this.request = request;
        this.url = (path) => `/auth/${path}`;
    }
    can(data, config) {
        return this.request.post(this.url('can'), data, config);
    }
    policy(data, config) {
        return this.request.post(this.url('grant'), data, config);
    }
    static build(client) {
        return new Authorization(new providers_1.RequestService(client));
    }
}
exports.Authorization = Authorization;
//# sourceMappingURL=authorization.service.js.map