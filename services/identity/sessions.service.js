"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsService = void 0;
const classes_1 = require("../../common/classes");
class SessionsService extends classes_1.RestfulService {
    constructor(client) {
        super('sessions', client);
        this.client = client;
    }
}
exports.SessionsService = SessionsService;
//# sourceMappingURL=sessions.service.js.map