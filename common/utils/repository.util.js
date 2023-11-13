"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isApplicable = exports.isAvailable = void 0;
const transform_util_1 = require("./transform.util");
const enums_1 = require("../enums");
const isAvailable = ({ deleted_at, restored_at, }) => {
    if (!deleted_at)
        return true;
    if (deleted_at && !restored_at)
        return false;
    if (typeof deleted_at === 'string')
        deleted_at = (0, transform_util_1.toDate)(deleted_at);
    if (typeof restored_at === 'string')
        restored_at = (0, transform_util_1.toDate)(restored_at);
    if (restored_at && deleted_at >= restored_at)
        return false;
    else
        return true;
};
exports.isAvailable = isAvailable;
const isApplicable = ({ state, status, }) => {
    if (!state && !status)
        return true;
    let cond = true;
    if (status && status !== enums_1.Status.Active)
        cond && (cond = false);
    if (state && ![enums_1.State.Approved, enums_1.State.Verified].includes(state))
        cond && (cond = false);
    return cond;
};
exports.isApplicable = isApplicable;
//# sourceMappingURL=repository.util.js.map