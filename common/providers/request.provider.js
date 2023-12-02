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
exports.RequestService = void 0;
class RequestService {
    constructor(axios) {
        this.axios = axios;
    }
    get(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.axios.get(url, config)).data;
        });
    }
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.axios.post(url, data, config)).data;
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.axios.delete(url, config)).data;
        });
    }
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.axios.put(url, data, config)).data;
        });
    }
    patch(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.axios.patch(url, data, config)).data;
        });
    }
}
exports.RequestService = RequestService;
//# sourceMappingURL=request.provider.js.map