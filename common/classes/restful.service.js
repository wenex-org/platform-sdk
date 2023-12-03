"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestfulService = void 0;
const providers_1 = require("../providers");
class RestfulService extends providers_1.RequestService {
    constructor(name, axios) {
        super(axios);
        this.name = name;
        this.axios = axios;
        this.url = (path) => `/${this.name}/${path}`;
    }
    count(filter, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, filter), Object.assign({}, config === null || config === void 0 ? void 0 : config.params));
            return (yield this.get(this.url('/count'), Object.assign(Object.assign({}, config), { params }))).total;
        });
    }
    create(data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(this.url(''), data, config);
        });
    }
    createBulk(data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.post(this.url(''), data, config))
                .items;
        });
    }
    find(filter, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, filter), Object.assign({}, config === null || config === void 0 ? void 0 : config.params));
            return (yield this.get(this.url(''), Object.assign(Object.assign({}, config), { params })))
                .items;
        });
    }
    findById(id, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.get(this.url(id), config)).data;
        });
    }
    deleteById(id, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.delete(this.url(id), config)).data;
        });
    }
    restoreById(id, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.put(`${this.url(id)}/restore`, undefined, config)).data;
        });
    }
    destroyById(id, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.delete(`${this.url(id)}/destroy`, config))
                .data;
        });
    }
    updateById(id, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.patch(`${this.url(id)}`, data, config))
                .data;
        });
    }
    updateBulk(data, filter, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = Object.assign(Object.assign({}, filter), Object.assign({}, config === null || config === void 0 ? void 0 : config.params));
            return (yield this.patch('/bulk', data, Object.assign(Object.assign({}, config), { params }))).total;
        });
    }
}
exports.RestfulService = RestfulService;
//# sourceMappingURL=restful.service.js.map