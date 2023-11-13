"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = exports.toJSON = void 0;
function toJSON(val) {
    try {
        return JSON.parse(val);
    }
    catch (_a) {
        return val;
    }
}
exports.toJSON = toJSON;
function toDate(val) {
    try {
        return new Date(val);
    }
    catch (_a) {
        return val;
    }
}
exports.toDate = toDate;
//# sourceMappingURL=transform.util.js.map