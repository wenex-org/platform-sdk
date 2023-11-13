"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const classes_1 = require("../../common/classes");
class UsersService extends classes_1.RestfulService {
    constructor(client) {
        super('users', client);
        this.client = client;
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map