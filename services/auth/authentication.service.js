"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const providers_1 = require("../../common/providers");
class Authentication {
    constructor(request) {
        this.request = request;
        this.url = (path) => `/auth/${path}`;
    }
    token(data, config) {
        return this.request.post(this.url('token'), data, config);
    }
    logout(data, config) {
        return this.request.post(this.url('logout'), data, config);
    }
    verify(data, config) {
        return this.request.post(this.url('verify'), data, config);
    }
    static build(client) {
        return new Authentication(new providers_1.RequestService(client));
    }
}
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.service.js.map