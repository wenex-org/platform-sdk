"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
class RequestService {
    constructor(client) {
        this.client = client;
    }
    get(url, config) {
        return this.client.get(url, config);
    }
    post(url, data, config) {
        return this.client.post(url, data, config);
    }
    delete(url, config) {
        return this.client.delete(url, config);
    }
    put(url, data, config) {
        return this.client.put(url, data, config);
    }
    patch(url, data, config) {
        return this.client.patch(url, data, config);
    }
}
exports.RequestService = RequestService;
//# sourceMappingURL=request.provider.js.map