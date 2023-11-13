"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestfulService = void 0;
const providers_1 = require("../providers");
class RestfulService extends providers_1.RequestService {
    constructor(name, client) {
        super(client);
        this.name = name;
        this.client = client;
        this.url = (path) => `/${this.name}/${path}`;
    }
    count(filter, config) {
        const params = Object.assign({ filter }, config === null || config === void 0 ? void 0 : config.params);
        return this.get(this.url('/count'), Object.assign(Object.assign({}, config), { params }));
    }
    create(data, config) {
        return this.post(this.url(''), data, config);
    }
    createBulk(data, config) {
        return this.post(this.url(''), data, config);
    }
    find(filter, config) {
        const params = Object.assign({ filter }, config === null || config === void 0 ? void 0 : config.params);
        return this.get(this.url(''), Object.assign(Object.assign({}, config), { params }));
    }
    findById(id, config) {
        return this.get(this.url(id), config);
    }
    deleteById(id, config) {
        return this.delete(this.url(id), config);
    }
    restoreById(id, config) {
        return this.put(`${this.url(id)}/restore`, undefined, config);
    }
    destroyById(id, config) {
        return this.delete(`${this.url(id)}/destroy`, config);
    }
    updateById(id, data, config) {
        return this.patch(`${this.url(id)}`, data, config);
    }
    updateBulk(data, filter, config) {
        const params = Object.assign({ filter }, config === null || config === void 0 ? void 0 : config.params);
        return this.patch('/bulk', data, Object.assign(Object.assign({}, config), { params }));
    }
}
exports.RestfulService = RestfulService;
//# sourceMappingURL=restful.service.js.map