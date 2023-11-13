"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const classes_1 = require("../../common/classes");
class ClientsService extends classes_1.RestfulService {
    constructor(client) {
        super('clients', client);
        this.client = client;
    }
}
exports.ClientsService = ClientsService;
//# sourceMappingURL=clients.service.js.map