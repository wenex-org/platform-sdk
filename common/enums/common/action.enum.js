"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var Action;
(function (Action) {
    // Keyword
    Action["Any"] = "any";
    // ----------------------------
    // Common Actions
    // ----------------------------
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
    Action["Restore"] = "restore";
    Action["Destroy"] = "destroy";
    // ----------------------------
    // Special Actions
    // ----------------------------
    Action["Emit"] = "emit";
    Action["Send"] = "send";
    Action["Init"] = "init";
    Action["Verify"] = "verify";
    Action["Upload"] = "upload";
    Action["Download"] = "download";
    // ----------------------------
    // Scoped Actions
    // ----------------------------
    Action["CreateOwn"] = "create:own";
    Action["ReadOwn"] = "read:own";
    Action["UpdateOwn"] = "update:own";
    Action["DeleteOwn"] = "delete:own";
    Action["RestoreOwn"] = "restore:own";
    Action["DestroyOwn"] = "destroy:own";
    Action["CreateShare"] = "create:share";
    Action["ReadShare"] = "read:share";
    Action["UpdateShare"] = "update:share";
    Action["DeleteShare"] = "delete:share";
    Action["RestoreShare"] = "restore:share";
    Action["DestroyShare"] = "destroy:share";
    Action["CreateGroup"] = "create:group";
    Action["ReadGroup"] = "read:group";
    Action["UpdateGroup"] = "update:group";
    Action["DeleteGroup"] = "delete:group";
    Action["RestoreGroup"] = "restore:group";
    Action["DestroyGroup"] = "destroy:group";
    Action["CreateClient"] = "create:client";
    Action["ReadClient"] = "read:client";
    Action["UpdateClient"] = "update:client";
    Action["DeleteClient"] = "delete:client";
    Action["RestoreClient"] = "restore:client";
    Action["DestroyClient"] = "destroy:client";
})(Action || (exports.Action = Action = {}));
//# sourceMappingURL=action.enum.js.map